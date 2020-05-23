let welcome = "Welcome to README.md generator, your one stop shop to creating a Read Me file.";
let start = "Would you like to create a README.md?"


function generateMarkdown(data) {
  return `
# ${data.title}

`;
}

module.exports = {
  welcome: welcome,
  generateMarkdown: generateMarkdown

};


