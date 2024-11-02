import * as z from "zod";
// @ts-ignore
import Schema from "../../../../env.js";
import * as fs from "node:fs/promises";
import * as path from 'path';
import 'dotenv/config'

const ignoreError = process.argv.includes('--ignore-error');

export async function loadEnv() {
  const reset = "\x1b[0m";
  const red = "\x1b[31m";
  

  const NODE_ENV = !process.env.NODE_ENV ? "development" : process.env.NODE_ENV;
  
  let processEnv = {
    ...process.env,
    NODE_ENV,
  };
  
  const parsed = z
    .object({
      ...Schema,
      NODE_ENV: z.enum(["development", "production"]).default("development"),
    })
    .safeParse(processEnv);
  
  if (parsed.success === false) {
    console.log(
      `❌ ${red}Invalid environment variables:${reset}`,
      parsed.error.flatten().fieldErrors,
    );

    if (!ignoreError) {
      process.exit(1);
    }
  }
  
  const tsFileContent =
    `
/************************************************************/
/* Generated automatically. Please do not modify this file. */
/************************************************************/
import z from "zod";
// @ts-ignore
import EnvSchema from "../../../../env.js";

const Schema = z.object({
  ...EnvSchema,
  NODE_ENV: z.enum(["development", "production"]).default("development"),
});

export const Env = {} as z.infer<typeof Schema>;
export { EasConfig } from './types/eas-config.js'
`.trim() + "\n";


  const scriptFolder = __dirname;
  
  async function updateEnvFile() {

    const jsFileContent =
`
/************************************************************/
/* Generated automatically. Please do not modify this file. */
/************************************************************/

module.exports = {
Env: {
${Object.entries(parsed.data!)
.map(([key, value]) => `    ${key}: ${JSON.stringify(value)},`)
.join("\n")}
}
}`.trim() + "\n";

    await fs.writeFile(path.join(scriptFolder, "index.js"), jsFileContent)
  }
  
  let changed = false
  
  async function updateTsFile() {
    try {
      const oldTsFileContent = await fs.readFile(path.join(scriptFolder, "index.ts"), "utf8");  
      if (oldTsFileContent === tsFileContent) {
        return
      }
    }
    catch {
      // do nothing
    }
  
    changed = true
  
      // @ts-ignore
    await Promise.all([
      fs.writeFile(path.join(scriptFolder, "index.ts"), tsFileContent),
    ]);
  }
  
  // @ts-ignore
  await Promise.all([
    ...parsed.success ? [updateEnvFile()]:[],
    updateTsFile()
  ]);
  
  if (changed) {
    return { parseTypes: true }
  }

  return { parseTypes: false }
}