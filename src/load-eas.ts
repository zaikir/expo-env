// @ts-ignore
import buildEasConfig from "../../../../eas.config.js";
import * as fs from "node:fs/promises";

export async function loadEas() {
  const data = buildEasConfig()

  await fs.writeFile("eas.json", JSON.stringify(data, undefined, 2))
}

loadEas()