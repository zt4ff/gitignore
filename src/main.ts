import { cliOptions, editorOptions } from "./mappings";
import {
  alphabetPrompt,
  selectFromOptions,
  promptForEditorConfig,
} from "./cli";
import generateIgnoreFile from "./generate_ignorefile";

async function main() {
  const filter = await alphabetPrompt();
  const generalType = await selectFromOptions(
    "Select the framework, project or tool type",
    cliOptions[filter]
  );

  const shouldIncludeEditorConfig = await promptForEditorConfig();

  if (!shouldIncludeEditorConfig) {
    return generateIgnoreFile(generalType);
  }

  const editorFilter = await alphabetPrompt(true);
  const editorType = await selectFromOptions(
    "Select the Editor type",
    editorOptions[editorFilter]
  );

  return generateIgnoreFile(generalType, editorType);
}

main();
