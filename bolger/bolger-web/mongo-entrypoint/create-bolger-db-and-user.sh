#!/usr/bin/env bash
echo "Creating bolger db and user account..."
mongo admin --eval "db.getSiblingDB('bolger').createUser({user:'bolger',pwd:'bolger',roles:[{role:'readWrite', db:'bolger'}]});"
echo "bolger db and user account created."