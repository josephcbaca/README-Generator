// Link to index.js which will receive our information from prompt to .md
const data = require("../index.js");

const welcome = "Welcome to README.md generator, your one stop shop to creating a Read Me file.";
const answers = data;

function generateMarkdown(answers) {
  // Additional functionality for Badges Choices
  if (answers.badges == "GitHub file size") {
    badgeans = "[![Only 32 Kb](https://badge-size.herokuapp.com/Naereen/StrapDown.js/master/strapdown.min.js)](https://github.com/Naereen/StrapDown.js/blob/master/strapdown.min.js)";
  };
  if (answers.badges == "GitHub version") {
    badgeans = "[![GitHub version](https://badge.fury.io/gh/Naereen%2FStrapDown.js.svg)](https://github.com/Naereen/StrapDown.js)";
  };
  if (answers.badges == "GitHub hits") {
    badgeans = "[![HitCount](http://hits.dwyl.io/Naereen/badges.svg)](http://hits.dwyl.io/Naereen/badges)";
  };
  // Additional functionality for multiple GitHub profiles to display
  let githubans = answers.github
  let github = githubans.split(" ");

  let gh3 = ""

  for (value of github) {
    let gh1 = value;
    let gh2 = `![Photo of user ${value}](https://github.com/${value}.png)`
    gh3 += gh1 + `\n` + `\n` + gh2 + `\n` + `\n`;
  }

  return `
${badgeans}

# ${answers.title}

# Description
${answers.description}

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#Credits)
* [Tests](#Tests)
* [Questions](#Questions)

# Installation
${answers.installation}

# Usage
${answers.usage}

# License
${answers.license}

# Tests
${answers.tests}

# Credits
${gh3}

[This Read Me was generated using the Good README.md Generator ](https://github.com/josephcbaca/README-Generator)`
    ;
}

module.exports = {
  welcome: welcome,
  generateMarkdown: generateMarkdown
};


