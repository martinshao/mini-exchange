#!/usr/bin/env bash
set -euo pipefail

###############################################################################
# Variables
###############################################################################
AWS_PROFILE="${AWS_PROFILE:-mini-exchange-new-dev}"
AWS_REGION="${AWS_REGION:-us-east-1}"
INSTANCE_ID="${INSTANCE_ID:-}"
S3_BUCKET="${S3_BUCKET:-}"
S3_KEY="${S3_KEY:-releases/mini-exchange.tar.gz}"
APP_ROOT="/opt/mini-exchange"
APP_CURRENT="${APP_ROOT}/current"
APP_USER="ubuntu"
SERVICE_NAME="mini-exchange-web"
COMMAND_TIMEOUT_SECONDS="1800"

###############################################################################
# Helpers
###############################################################################
log() {
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
# Deploy
###############################################################################
require_var "INSTANCE_ID" "${INSTANCE_ID}"
require_var "S3_BUCKET" "${S3_BUCKET}"

COMMAND_FILE="$(mktemp)"
trap 'rm -f "${COMMAND_FILE}"' EXIT

cat > "${COMMAND_FILE}" <<EOF
{
  "commands": [
    "set -euxo pipefail",
    "mkdir -p '${APP_CURRENT}' '${APP_ROOT}/releases'",
    "aws s3 cp 's3://${S3_BUCKET}/${S3_KEY}' '${APP_ROOT}/releases/mini-exchange.tar.gz' --region '${AWS_REGION}'",
    "rm -rf '${APP_CURRENT:?}'/*",
    "tar -xzf '${APP_ROOT}/releases/mini-exchange.tar.gz' -C '${APP_CURRENT}'",
    "chown -R '${APP_USER}:${APP_USER}' '${APP_ROOT}'",
    "sudo -u '${APP_USER}' bash -lc 'cd ${APP_CURRENT} && corepack enable && corepack prepare pnpm@11.5.2 --activate'",
    "sudo -u '${APP_USER}' bash -lc 'cd ${APP_CURRENT} && pnpm install --frozen-lockfile'",
    "sudo -u '${APP_USER}' bash -lc 'cd ${APP_CURRENT} && pnpm --dir apps/exchange-web build'",
    "systemctl restart '${SERVICE_NAME}'",
    "sleep 3",
    "curl -I http://127.0.0.1:3000",
    "curl -I http://127.0.0.1"
  ],
  "executionTimeout": ["${COMMAND_TIMEOUT_SECONDS}"]
}
EOF

log "Sending SSM deployment command to ${INSTANCE_ID}"
COMMAND_ID="$(
  aws ssm send-command \
    --profile "${AWS_PROFILE}" \
    --region "${AWS_REGION}" \
    --instance-ids "${INSTANCE_ID}" \
    --document-name "AWS-RunShellScript" \
    --comment "Deploy mini-exchange web from S3 artifact" \
    --parameters "file://${COMMAND_FILE}" \
    --query "Command.CommandId" \
    --output text
)"

log "Command ID: ${COMMAND_ID}"
log "Waiting for command completion"
aws ssm wait command-executed \
  --profile "${AWS_PROFILE}" \
  --region "${AWS_REGION}" \
  --command-id "${COMMAND_ID}" \
  --instance-id "${INSTANCE_ID}"

log "Fetching command output"
aws ssm get-command-invocation \
  --profile "${AWS_PROFILE}" \
  --region "${AWS_REGION}" \
  --command-id "${COMMAND_ID}" \
  --instance-id "${INSTANCE_ID}" \
  --output json

log "Deployment command finished"
