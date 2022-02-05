import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "input",
      name: "filter",
      validate: function (input) {
        let done = this.async;
      },
    },
  ])
  .then((answer) => {
    console.log(answer);
  });
