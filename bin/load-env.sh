#!/bin/bash

# Get the real directory of this script, resolving symlinks
SCRIPT_PATH="$(readlink -f "$0" 2>/dev/null || realpath "$0" 2>/dev/null || perl -MCwd -le 'print Cwd::abs_path shift' "$0")"
SCRIPT_DIR="$(dirname "$SCRIPT_PATH")"

# Execute the TypeScript files using bun
bun "$SCRIPT_DIR/save-env.ts" "$@"
if [ $? -ne 0 ]; then
  exit 1
fi

bun "$SCRIPT_DIR/../src/load-eas.ts" "$@"
if [ $? -ne 0 ]; then
  exit 1
fi