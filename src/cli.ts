import inquirer from "inquirer";

async function selectFromOptions(message: string, choices: string[]) {
  const { answer } = await inquirer.prompt([
    {
      type: "list",
      name: "answer",
      message,
      choices,
    },
  ]);

  return answer;
}

async function alphabetPrompt(editorType: boolean = false) {
  const { answer } = await inquirer.prompt([
    {
      type: "input",
      name: "answer",
      message:
        "Enter the initial letter of the language, framework, tools e.t.c",

      validate: (input) => {
        if (editorType) {
          return /^[a-gA-Gi-pI-Pr-tR-Tv-xV-X]$/.test(input)
            ? true
            : `No list under the entry ${input} `;
        }
        return /^[a-zA-Z]$/.test(input)
          ? true
          : "Provide a character between a - z";
      },
    },
  ]);

  return answer.toLowerCase();
}

async function promptForEditorConfig() {
  const { answer } = await inquirer.prompt({
    type: "confirm",
    name: "answer",
    message: "Do you want to include configuration for you editor?",
  });

  return answer;
}

export { promptForEditorConfig, alphabetPrompt, selectFromOptions };
