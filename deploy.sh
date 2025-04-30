#!/bin/bash

npm i && NEXT_DISABLE_ESLINT=1 NEXT_DISABLE_TYPECHECK=1 npm run build
cp -r out/* /home/lindsay/public/theportfoleyo.com/public
ls /home

