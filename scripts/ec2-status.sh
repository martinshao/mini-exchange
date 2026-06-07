#!/usr/bin/env bash
set -euo pipefail

###############################################################################
# Variables
###############################################################################
AWS_PROFILE="${AWS_PROFILE:-mini-exchange-new-dev}"
AWS_REGION="${AWS_REGION:-us-east-1}"
INSTANCE_ID="${INSTANCE_ID:-}"
SERVICE_NAME="mini-exchange-web"

###############################################################################
# Helpers
###############################################################################
log() {
  echo
  echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] $*"
}

require_var() {
  local name="$1"
  local value="$2"
  if [[ -z "${value}" ]]; then
    echo "Missing required variable: ${name}" >&2
    exit 1
  fi
}

###############################################################################
# Status
###############################################################################
require_var "INSTANCE_ID" "${INSTANCE_ID}"

log "EC2 instance status"
aws ec2 describe-instances \
  --profile "${AWS_PROFILE}" \
  --region "${AWS_REGION}" \
  --instance-ids "${INSTANCE_ID}" \
  --query "Reservations[].Instances[].{InstanceId:InstanceId,State:State.Name,PublicIp:PublicIpAddress,PrivateIp:PrivateIpAddress,SubnetId:SubnetId,SecurityGroups:SecurityGroups[].GroupId,LaunchTime:LaunchTime}" \
  --output table

log "SSM managed instance status"
aws ssm describe-instance-information \
  --profile "${AWS_PROFILE}" \
  --region "${AWS_REGION}" \
  --filters "Key=InstanceIds,Values=${INSTANCE_ID}" \
  --query "InstanceInformationList[].{InstanceId:InstanceId,PingStatus:PingStatus,AgentVersion:AgentVersion,PlatformName:PlatformName,PlatformVersion:PlatformVersion,LastPingDateTime:LastPingDateTime}" \
  --output table

COMMAND_FILE="$(mktemp)"
trap 'rm -f "${COMMAND_FILE}"' EXIT

cat > "${COMMAND_FILE}" <<EOF
{
  "commands": [
    "set -o pipefail",
    "echo '--- systemd ${SERVICE_NAME} ---'",
    "systemctl status '${SERVICE_NAME}' --no-pager || true",
    "echo '--- nginx ---'",
    "systemctl status nginx --no-pager || true",
    "echo '--- recent ${SERVICE_NAME} logs ---'",
    "journalctl -u '${SERVICE_NAME}' -n 120 --no-pager || true",
    "echo '--- recent nginx error logs ---'",
    "tail -n 120 /var/log/nginx/error.log || true",
    "echo '--- local health checks ---'",
    "curl -I http://127.0.0.1:3000 || true",
    "curl -I http://127.0.0.1 || true"
  ]
}
EOF

log "Sending SSM status command"
COMMAND_ID="$(
  aws ssm send-command \
    --profile "${AWS_PROFILE}" \
    --region "${AWS_REGION}" \
    --instance-ids "${INSTANCE_ID}" \
    --document-name "AWS-RunShellScript" \
    --comment "mini-exchange EC2 status check" \
    --parameters "file://${COMMAND_FILE}" \
    --query "Command.CommandId" \
    --output text
)"

aws ssm wait command-executed \
  --profile "${AWS_PROFILE}" \
  --region "${AWS_REGION}" \
  --command-id "${COMMAND_ID}" \
  --instance-id "${INSTANCE_ID}"

log "Remote service status and logs"
aws ssm get-command-invocation \
  --profile "${AWS_PROFILE}" \
  --region "${AWS_REGION}" \
  --command-id "${COMMAND_ID}" \
  --instance-id "${INSTANCE_ID}" \
  --query "{Status:Status,Stdout:StandardOutputContent,Stderr:StandardErrorContent}" \
  --output json
