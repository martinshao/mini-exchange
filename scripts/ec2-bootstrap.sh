#!/usr/bin/env bash
set -euo pipefail

###############################################################################
# Variables
###############################################################################
APP_NAME="mini-exchange"
APP_USER="ubuntu"
APP_ROOT="/opt/mini-exchange"
APP_CURRENT="${APP_ROOT}/current"
ENV_FILE="/etc/mini-exchange-web.env"
SERVICE_NAME="mini-exchange-web"
SERVICE_FILE="/etc/systemd/system/${SERVICE_NAME}.service"
NGINX_SITE="/etc/nginx/sites-available/${APP_NAME}.conf"
NGINX_ENABLED="/etc/nginx/sites-enabled/${APP_NAME}.conf"
NODE_MAJOR="20"
PNPM_VERSION="11.5.2"
SWAP_FILE="/swapfile"
SWAP_SIZE="2G"
APP_HOST="127.0.0.1"
APP_PORT="3000"

###############################################################################
# Helpers
###############################################################################
log() {
  echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] $*"
}

require_root() {
  if [[ "${EUID}" -ne 0 ]]; then
    echo "Please run as root: sudo $0" >&2
    exit 1
  fi
}

###############################################################################
# Bootstrap
###############################################################################
require_root

log "Updating apt package metadata"
apt-get update

log "Upgrading installed packages"
DEBIAN_FRONTEND=noninteractive apt-get upgrade -y

log "Installing base packages"
DEBIAN_FRONTEND=noninteractive apt-get install -y \
  ca-certificates \
  curl \
  git \
  gnupg \
  nginx \
  build-essential \
  unzip

if ! command -v node >/dev/null 2>&1 || [[ "$(node -v | sed 's/^v//' | cut -d. -f1)" != "${NODE_MAJOR}" ]]; then
  log "Installing Node.js ${NODE_MAJOR} LTS from NodeSource"
  install -d -m 0755 /etc/apt/keyrings
  curl -fsSL "https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key" \
    | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
  echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_${NODE_MAJOR}.x nodistro main" \
    > /etc/apt/sources.list.d/nodesource.list
  apt-get update
  DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs
else
  log "Node.js ${NODE_MAJOR} is already installed: $(node -v)"
fi

log "Enabling corepack"
corepack enable

log "Preparing pnpm ${PNPM_VERSION}"
corepack prepare "pnpm@${PNPM_VERSION}" --activate

if [[ ! -f "${SWAP_FILE}" ]]; then
  log "Creating ${SWAP_SIZE} swap at ${SWAP_FILE}"
  fallocate -l "${SWAP_SIZE}" "${SWAP_FILE}"
  chmod 600 "${SWAP_FILE}"
  mkswap "${SWAP_FILE}"
else
  log "Swap file already exists at ${SWAP_FILE}"
fi

if ! swapon --show=NAME --noheadings | grep -qx "${SWAP_FILE}"; then
  log "Enabling swap"
  swapon "${SWAP_FILE}"
else
  log "Swap is already enabled"
fi

if ! grep -qE "^${SWAP_FILE}[[:space:]]" /etc/fstab; then
  log "Persisting swap in /etc/fstab"
  echo "${SWAP_FILE} none swap sw 0 0" >> /etc/fstab
else
  log "Swap is already present in /etc/fstab"
fi

log "Creating application directories"
mkdir -p "${APP_CURRENT}" "${APP_ROOT}/releases" "/var/log/${APP_NAME}"
chown -R "${APP_USER}:${APP_USER}" "${APP_ROOT}" "/var/log/${APP_NAME}"

if [[ ! -f "${ENV_FILE}" ]]; then
  log "Creating ${ENV_FILE}"
  cat > "${ENV_FILE}" <<EOF
NODE_ENV=production
HOST=${APP_HOST}
PORT=${APP_PORT}
NEXT_TELEMETRY_DISABLED=1
EOF
  chmod 0640 "${ENV_FILE}"
else
  log "${ENV_FILE} already exists"
fi

log "Writing systemd service ${SERVICE_FILE}"
cat > "${SERVICE_FILE}" <<EOF
[Unit]
Description=mini-exchange web
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=${APP_USER}
Group=${APP_USER}
WorkingDirectory=${APP_CURRENT}
EnvironmentFile=${ENV_FILE}
ExecStart=/bin/bash -lc 'exec pnpm --dir apps/exchange-web exec next start --hostname "\${HOST}" --port "\${PORT}"'
Restart=always
RestartSec=5
StandardOutput=journal
StandardError=journal
SyslogIdentifier=${SERVICE_NAME}

[Install]
WantedBy=multi-user.target
EOF

log "Reloading systemd and enabling ${SERVICE_NAME}"
systemctl daemon-reload
systemctl enable "${SERVICE_NAME}"

log "Writing Nginx reverse proxy ${NGINX_SITE}"
cat > "${NGINX_SITE}" <<EOF
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;

    location / {
        proxy_pass http://${APP_HOST}:${APP_PORT};
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
EOF

log "Enabling Nginx site"
ln -sfn "${NGINX_SITE}" "${NGINX_ENABLED}"
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl enable nginx
systemctl restart nginx

log "Bootstrap complete"
