#!/usr/bin/env sh

apt-get -y install sshpass
sshpass -e ssh $HOST 'git -C telegram/trecebot pull'
sshpass -e ssh $HOST 'pm2 restart trecebot'
