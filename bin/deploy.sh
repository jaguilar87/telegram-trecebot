#!/usr/bin

apt-get install sshpass
sshpass -p $PASS ssh -o StrictHostKeyChecking=no $HOST

cd telegram/trecebot

git pull

pm2 restart trecebot
