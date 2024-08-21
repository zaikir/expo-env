import { symlink } from 'fs/promises'
import * as path from 'path';

const scriptFolder = __dirname;
const targetFolder = process.cwd();

try {
  await symlink(path.join(targetFolder, 'env.ts'), path.join(scriptFolder, 'env.ts'));
}
catch {
  // do nothing
}

