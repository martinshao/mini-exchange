#!/usr/bin/env bash
set -euo pipefail

###############################################################################
# Variables
###############################################################################
AWS_PROFILE="${AWS_PROFILE:-mini-exchange-new-dev}"
AWS_REGION="${AWS_REGION:-us-east-1}"
S3_BUCKET="${S3_BUCKET:-}"
S3_KEY="${S3_KEY:-releases/mini-exchange.tar.gz}"
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PACKAGE_NAME="mini-exchange.tar.gz"
PACKAGE_PATH="${PROJECT_ROOT}/${PACKAGE_NAME}"

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
    echo "Example: S3_BUCKET=mini-exchange-artifacts-dev-123 ./scripts/package-and-upload.sh" >&2
    exit 1
  fi
}

###############################################################################
# Package and upload
###############################################################################
require_var "S3_BUCKET" "${S3_BUCKET}"

cd "${PROJECT_ROOT}"

log "Creating ${PACKAGE_PATH}"
rm -f "${PACKAGE_PATH}"
tar \
  --exclude="./node_modules" \
  --exclude="./.next" \
  --exclude="./.sst" \
  --exclude="./.git" \
  --exclude="./dist" \
  --exclude="./coverage" \
  --exclude="./${PACKAGE_NAME}" \
  -czf "${PACKAGE_PATH}" \
  .

log "Uploading to s3://${S3_BUCKET}/${S3_KEY}"
aws s3 cp "${PACKAGE_PATH}" "s3://${S3_BUCKET}/${S3_KEY}" \
  --profile "${AWS_PROFILE}" \
  --region "${AWS_REGION}"

log "Upload complete"
