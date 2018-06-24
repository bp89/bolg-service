#!/bin/bash -eux

sed -i 's/http:\/\/archive./http:\/\/au.archive./g' /etc/apt/sources.list
apt-get update
apt-get install -y net-tools

ifconfig

echo `ifconfig docker0 | grep 'inet addr' | awk '{print $2}' | cut -d ':' -f 2` bolger-web >> /etc/hosts && nginx -g 'daemon off;'