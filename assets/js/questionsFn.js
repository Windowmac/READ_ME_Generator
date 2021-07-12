const inquirer = require('inquirer');
const writeToFile = require('./writeToFile');

const questionsFn = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    writeToFile('./newReadme/README.md', answers);
  });
};

module.exports = questionsFn;
