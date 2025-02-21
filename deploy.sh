#!/bin/bash

npm i && npm run build && npm run export
cp -r out/* /home/lindsay/public/theportfoleyo.com/public
ls /home