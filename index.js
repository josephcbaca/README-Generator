// Link to generateMarkdown.js which will write our information from prompt to .md
const generate = require("./utils/generateMarkdown.js");
// Writing to the filesystem
const fs = require("fs");
// Collecting user input
const inquirer = require("inquirer");

const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// const start = "Would you like to create a README.md?"

function promptUser() {
    return inquirer.prompt([
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
    ]);
};

async function init() {
    console.log(generate.welcome);
    try {
        const data = await promptUser();

        module.exports = data

        const readme = generate.generateMarkdown(data);

        await writeFileAsync("README.md", readme);

        console.log("Successfully created README.md");
    } catch (err) {
        console.log(err);
    }
}

init();



// User types node index.js to start command-line questions
// Welcome message

// Prompts for title
// Then user types title and 
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions -- What does this mean?
    // User GitHub profile picture
    // User GitHub email
