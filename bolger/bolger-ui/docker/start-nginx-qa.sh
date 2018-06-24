#!/bin/bash -ex

if [[ ! -z $BOLGER_WEB_HOSTNAME ]]; then
    sed -e "s/bolger-web/$BOLGER_WEB_HOSTNAME/g" -iBAK /etc/nginx/nginx.conf
fi

nginx -g "daemon off;"
