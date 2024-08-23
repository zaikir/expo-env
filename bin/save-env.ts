#!/usr/bin/env bun

import { loadEnv } from "@kirz/expo-env/src/load-env";
import { compileTypes } from "@kirz/expo-env/src/compile-types";

await loadEnv()
compileTypes(`node_modules/@kirz/expo-env/tsconfig.json`)
