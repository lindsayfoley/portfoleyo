#!/bin/bash

export NODE_OPTIONS="--max-old-space-size=8192"
export NEXT_DISABLE_ESLINT=1
export NEXT_DISABLE_TYPECHECK=1

npm i && npm run build
cp -r out/* /home/lindsay/public/theportfoleyo.com/public
ls /home

