#!/bin/bash

nvm install 18
nvm use 18
npm i && npm run build
cp -r out/* /home/lindsay/public/theportfoleyo.com/public
ls /home

