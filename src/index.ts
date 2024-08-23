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
