# @kirz/expo-env

## Description

`@kirz/expo-env` is a simple environment loader designed for Expo projects, offering TypeScript support and schema validation using Zod. This package helps ensure your environment variables are correctly typed and validated, providing an easy way to manage them within your Expo app.

## Installation

You can install the package using your preferred package manager:
```bash
npm install @kirz/expo-env
# or
yarn add @kirz/expo-env
# or
pnpm add @kirz/expo-env
```

### Schema validation
This package requires [Zod](https://www.npmjs.com/package/zod) as a peer dependency for schema validation. You can install it as follows:
```bash
npm install zod
# or
yarn add zod
# or
pnpm add zod
```

### Usage
#### Step 1: Update package.json
Add the following script to your package.json to automatically load environment variables before starting your Expo project:
```json
"scripts": {
  "prestart": "load-env"
}
```

#### Step 2: Create env.ts
In the root of your project, create a file named env.ts. This file will define your environment variables using Zod for schema validation. Here’s an example:
```typescript
import z from "zod";

export default {
  APP_NAME: z.string(),
  APP_BUNDLE_ID: z.string(),
  APP_VERSION: z.string().default("1.0"),
};
```


#### Step 3: Load Env
This package loads environment variables from two sources:
- Process Environment (process.env)
- YAML Configuration File: the package looks for a YAML configuration file named either env.dev.yml or env.prod.yml depending on the value of the NODE_ENV environment variable.
  -	If `NODE_ENV` is set to `development`, it will load variables from `env.dev.yml`
  - If `NODE_ENV` is set to `production`, it will load variables from `env.prod.yml`

#### Step 4: Import Env
In any file where you need to access your environment variables, import the Env object like this:
```typescript
import { Env } from "@kirz/expo-env";
```

#### Step 5: Use Env in Your Project
You can now access your validated environment variables anywhere in your project, including in app.config.ts. For example:
```typescript
import { Env } from "@kirz/expo-env";
import { ConfigContext, ExpoConfig } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: Env.APP_NAME,
    slug: Env.APP_BUNDLE_ID,
    version: Env.APP_VERSION,
  };
};
```