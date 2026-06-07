#!/bin/bash
set -euxo pipefail

export DEBIAN_FRONTEND=noninteractive

apt-get update
apt-get install -y nginx unzip

mkdir -p /opt/mini-exchange /var/log/mini-exchange
chown -R ubuntu:ubuntu /opt/mini-exchange /var/log/mini-exchange

systemctl enable nginx
systemctl start nginx
