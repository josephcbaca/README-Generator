// Link to index.js which will receive our information from prompt to .md
const data = require("../index.js");

const welcome = "Welcome to README.md generator, your one stop shop to creating a Read Me file.";
const answers = data;

function generateMarkdown(answers) {
  return `
# ${answers.title}
# Description
${answers.description}
# Installation
${answers.installation}
`;
}

module.exports = {
  welcome: welcome,
  generateMarkdown: generateMarkdown
};


