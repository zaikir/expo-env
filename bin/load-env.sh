#!/bin/bash

# Create env.ts symlink
bun "$(dirname "$0")/../@kirz/expo-env/src/create-env-symlink.ts"

# Generate files
bun "$(dirname "$0")/../@kirz/expo-env/src/load-env.ts"

result=$?

if [ $result -eq 1 ]; then
  # Create type declarations
  bun tsc -p "$(dirname "$0")/../@kirz/expo-env/tsconfig.json"
fi