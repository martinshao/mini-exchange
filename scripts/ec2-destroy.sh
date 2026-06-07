#!/usr/bin/env bash
set -euo pipefail

###############################################################################
# Variables
###############################################################################
AWS_PROFILE="${AWS_PROFILE:-mini-exchange-new-dev}"
AWS_REGION="${AWS_REGION:-us-east-1}"
INSTANCE_ID="${INSTANCE_ID:-}"
SECURITY_GROUP_ID="${SECURITY_GROUP_ID:-}"
INSTANCE_PROFILE_NAME="${INSTANCE_PROFILE_NAME:-mini-exchange-ec2-profile-dev}"
IAM_ROLE_NAME="${IAM_ROLE_NAME:-mini-exchange-ec2-role-dev}"
S3_BUCKET="${S3_BUCKET:-}"
SSM_POLICY_ARN="arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
INLINE_POLICY_NAME="mini-exchange-artifact-read-dev"

###############################################################################
# Helpers
###############################################################################
log() {
  echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] $*"
}

confirm_step() {
  local prompt="$1"
  echo
  echo "${prompt}"
  read -r -p "Type YES to continue: " answer
  if [[ "${answer}" != "YES" ]]; then
    log "Skipped: ${prompt}"
    return 1
  fi
  return 0
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
# Destroy
###############################################################################
require_var "INSTANCE_ID" "${INSTANCE_ID}"
require_var "SECURITY_GROUP_ID" "${SECURITY_GROUP_ID}"
require_var "S3_BUCKET" "${S3_BUCKET}"

log "Target resources"
echo "AWS_PROFILE=${AWS_PROFILE}"
echo "AWS_REGION=${AWS_REGION}"
echo "INSTANCE_ID=${INSTANCE_ID}"
echo "SECURITY_GROUP_ID=${SECURITY_GROUP_ID}"
echo "INSTANCE_PROFILE_NAME=${INSTANCE_PROFILE_NAME}"
echo "IAM_ROLE_NAME=${IAM_ROLE_NAME}"
echo "S3_BUCKET=${S3_BUCKET}"

if confirm_step "Stop EC2 instance ${INSTANCE_ID}?"; then
  aws ec2 stop-instances \
    --profile "${AWS_PROFILE}" \
    --region "${AWS_REGION}" \
    --instance-ids "${INSTANCE_ID}"
  aws ec2 wait instance-stopped \
    --profile "${AWS_PROFILE}" \
    --region "${AWS_REGION}" \
    --instance-ids "${INSTANCE_ID}"
fi

if confirm_step "Terminate EC2 instance ${INSTANCE_ID}?"; then
  aws ec2 terminate-instances \
    --profile "${AWS_PROFILE}" \
    --region "${AWS_REGION}" \
    --instance-ids "${INSTANCE_ID}"
  aws ec2 wait instance-terminated \
    --profile "${AWS_PROFILE}" \
    --region "${AWS_REGION}" \
    --instance-ids "${INSTANCE_ID}"
fi

if confirm_step "Delete Security Group ${SECURITY_GROUP_ID}?"; then
  aws ec2 delete-security-group \
    --profile "${AWS_PROFILE}" \
    --region "${AWS_REGION}" \
    --group-id "${SECURITY_GROUP_ID}"
fi

if confirm_step "Remove role ${IAM_ROLE_NAME} from instance profile ${INSTANCE_PROFILE_NAME}?"; then
  aws iam remove-role-from-instance-profile \
    --profile "${AWS_PROFILE}" \
    --instance-profile-name "${INSTANCE_PROFILE_NAME}" \
    --role-name "${IAM_ROLE_NAME}" || true
fi

if confirm_step "Delete instance profile ${INSTANCE_PROFILE_NAME}?"; then
  aws iam delete-instance-profile \
    --profile "${AWS_PROFILE}" \
    --instance-profile-name "${INSTANCE_PROFILE_NAME}"
fi

if confirm_step "Detach SSM managed policy from IAM role ${IAM_ROLE_NAME}?"; then
  aws iam detach-role-policy \
    --profile "${AWS_PROFILE}" \
    --role-name "${IAM_ROLE_NAME}" \
    --policy-arn "${SSM_POLICY_ARN}" || true
fi

if confirm_step "Delete inline artifact policy ${INLINE_POLICY_NAME} from IAM role ${IAM_ROLE_NAME}?"; then
  aws iam delete-role-policy \
    --profile "${AWS_PROFILE}" \
    --role-name "${IAM_ROLE_NAME}" \
    --policy-name "${INLINE_POLICY_NAME}" || true
fi

if confirm_step "Delete IAM role ${IAM_ROLE_NAME}?"; then
  aws iam delete-role \
    --profile "${AWS_PROFILE}" \
    --role-name "${IAM_ROLE_NAME}"
fi

if confirm_step "Delete all files in s3://${S3_BUCKET}?"; then
  aws s3 rm "s3://${S3_BUCKET}" \
    --profile "${AWS_PROFILE}" \
    --region "${AWS_REGION}" \
    --recursive
fi

if confirm_step "Delete S3 bucket ${S3_BUCKET}?"; then
  aws s3api delete-bucket \
    --profile "${AWS_PROFILE}" \
    --region "${AWS_REGION}" \
    --bucket "${S3_BUCKET}"
fi

log "Destroy script finished"
