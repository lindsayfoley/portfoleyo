#!/bin/bash

npm i && npm run build
cp -r out/* /home/lindsay/public/theportfoleyo.com/public
ls /home