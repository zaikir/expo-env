#!/bin/bash

bun "$(dirname "$0")/../@kirz/expo-env/bin/save-env.ts"

bun "$(dirname "$0")/../@kirz/expo-env/src/load-eas.ts"
