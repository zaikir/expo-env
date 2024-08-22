// @ts-ignore
import buildEasConfig from "../../../../eas.config.js";
import * as fs from "node:fs/promises";
import * as path from 'path';

export async function loadEas() {
  const data = buildEasConfig()

  await fs.writeFile(path.join(__dirname, "eas.json"), JSON.stringify(data, undefined, 2))
}