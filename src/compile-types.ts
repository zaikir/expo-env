import tsc from 'typescript';
import * as path from 'path';
import { writeFileSync } from 'fs';

export function compileTypes(tsConfigPath: string) {
  const configPath = path.resolve(tsConfigPath);

  // Read the tsconfig.json file
  const configFile = tsc.readConfigFile(configPath, tsc.sys.readFile);

  // Handle errors if the configFile has issues
  if (configFile.error) {
    const { messageText } = configFile.error;
    console.error(`Error reading tsconfig.json: ${messageText}`);
    return;
  }

  // Parse the JSON configuration to get compiler options
  const parsedCommandLine = tsc.parseJsonConfigFileContent(
    configFile.config,
    tsc.sys,
    path.dirname(configPath)
  );

  // Create a program from the parsed configuration
  const program = tsc.createProgram({
    rootNames: parsedCommandLine.fileNames,
    options: parsedCommandLine.options,
  });

  program.emit(undefined, (fileName, data) => {
    if (fileName.endsWith('.d.ts')) {
        writeFileSync(fileName, data);
    }
  });
}