#!/bin/bash

bun "$(dirname "$0")/../@kirz/expo-env/bin/save-env.ts" "$@"
if [ $? -ne 0 ]; then
  exit 1
fi

bun "$(dirname "$0")/../@kirz/expo-env/src/load-eas.ts" "$@"
if [ $? -ne 0 ]; then
  exit 1
fi