// Link to generateMarkdown.js which will write our information from prompt to .md
const generate = require("./utils/generateMarkdown.js");
// Writing to the filesystem
const fs = require("fs");
// Collecting user input
const inquirer = require("inquirer");

const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const welcome = "Welcome to README.md generator, your one stop shop to creating a Read Me file.";
// const start = "Would you like to create a README.md?"

// const filename = fs.writeFile("README.md");

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
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

function writeToFile(filename, data) {

    // takes in filename and data declarations and sends to generateMarkdown

}

// data constructor for function writeToFile

async function init() {
    console.log(generate.welcome);
    try {
        const data = await promptUser();

        const readme = generateMarkdown(data);

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
