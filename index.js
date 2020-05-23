// Link to generateMarkdown.js which will write our information from prompt to .md
let generate = require("./utils/generateMarkdown.js");
// 
let fs = require("fs");
// 
let inquirer = require("inquirer");

let fileName = fs.writeFile("README.md");


console.log(generate.welcome);

const questions = [

    inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "checkbox",
            message: "What languages do you know?",
            name: "stack",
            choices: [
                "HTML",
                "CSS",
                "JavaScript",
                "MySQL"
            ]
        },
        {
            type: "list",
            message: "What is your preferred method of communication?",
            name: "contact",
            choices: [
                "email",
                "phone",
                "telekinesis"
            ]
        }
    ])
];

questions.then(function(data) {

    var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });

function writeToFile(fileName, data) {

}

function init() {

}

init();

// User types node index.js to start command-line questions
// Welcome message

// Prompts for title
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
