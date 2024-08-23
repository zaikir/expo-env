#!/usr/bin/env bun

import { loadEnv } from "@kirz/expo-env/src/load-env";
import { loadEas } from "@kirz/expo-env/src/load-eas";
import { compileTypes } from "@kirz/expo-env/src/compile-types";

const { parseTypes } = await loadEnv()

if (parseTypes) {
  compileTypes(`node_modules/@kirz/expo-env/tsconfig.json`)
}