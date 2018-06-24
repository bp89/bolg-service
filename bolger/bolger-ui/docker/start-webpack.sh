#!/bin/bash

# If the bolger-web cannot be found, wait a bit and try again then exit as a failure

a=$(cat /etc/hosts | grep bolger-web)
if [ -z "$a" ]; then
    x=`host bolger-web | grep 'has address' | wc -l`
    if [[ $x -le 0 ]]; then
      echo "Cannot find bolger-web through DNS lookup!"
      sleep 5
      exit 1
    else
      echo "Found bolger-web"
    fi

    # Add the bolger-web to /etc/hosts because node had a bug with resolving DNS
    echo `host bolger-web | grep 'has address' | grep -oE '[^ ]+\$'` bolger-web >> /etc/hosts

    cat /etc/hosts

    echo "ip"
    ip addr
fi


# Start webpack
npm run start-webpack-dev