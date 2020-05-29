// Link to generateMarkdown.js which will write our information from prompt to .md
const generate = require("./utils/generateMarkdown.js");
// Writing to the filesystem
const fs = require("fs");
// Collecting user input
const inquirer = require("inquirer");

const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
// How do I pass const questions into promptUser()
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Type out the description for your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "Type out the installation steps for your project?"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username and the GitHub Usernames of your collaborators separted by spaces."
      },
      {
        type: "list",
        name: "badges",
        message: "Choose the badge you wish to attach to your Read Me.",
        choices: [
            "GitHub file size",
            "GitHub version",
            "GitHub hits"
          ]
      },
    ];


function promptUser(incoming) {
    return inquirer.prompt(incoming);
};

async function init() {
    console.log(generate.welcome);
    try {
        const data = await promptUser(questions);

        module.exports = data
        console.log(data)
        const readme = generate.generateMarkdown(data);

        await writeFileAsync("README.md", readme);

        console.log("Successfully created README.md");
    } catch (err) {
        console.log(err);
    }
}

init();