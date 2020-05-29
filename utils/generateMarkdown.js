// Link to index.js which will receive our information from prompt to .md
const data = require("../index.js");

const welcome = "Welcome to README.md generator, your one stop shop to creating a Read Me file.";
const answers = data;

function generateMarkdown(answers) {
  if (answers.badges == "GitHub file size") {
    githubans = "[![Only 32 Kb](https://badge-size.herokuapp.com/Naereen/StrapDown.js/master/strapdown.min.js)](https://github.com/Naereen/StrapDown.js/blob/master/strapdown.min.js)";
  };
  if (answers.badges == "GitHub version") {
    githubans = "[![GitHub version](https://badge.fury.io/gh/Naereen%2FStrapDown.js.svg)](https://github.com/Naereen/StrapDown.js)";
  };
  if (answers.badges == "GitHub hits") {
    githubans = "[![HitCount](http://hits.dwyl.io/Naereen/badges.svg)](http://hits.dwyl.io/Naereen/badges)";
  };

console.log(answers)
  return `
${githubans}
# ${answers.title}
# Description
${answers.description}
# Installation
${answers.installation}
# Collaborators
${answers.github}
![alt text](http://github.com/${answers.github}.png)
`


    ;
}

module.exports = {
  welcome: welcome,
  generateMarkdown: generateMarkdown
};


