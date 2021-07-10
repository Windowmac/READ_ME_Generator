// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter the description of your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the methods of installation for your project: ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter a description of the usages of your project: ',
  },
  {
    type: 'input',
    name: 'usageVideo',
    message: 'Enter the pathname for the usage video of your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Enter the license for your project: ',
    choices: [
      'GNU AGPLv3',
      'GNU GPLv3',
      'GNU LGPLv3',
      'Mozilla Public License 2.0',
      'Apache License 2.0',
      'MIT License',
      'Boost Software License 1.0',
      'The Unlicense',
      'none',
    ],
  },
  {
    type: 'input',
    name: 'test',
    message: 'Enter the test methods for your project',
  },
  {
    type: 'input',
    name: 'questions',
    message:
      'Enter how to get in contact with you for questions about your project',
  },
  {
    type: 'input',
    name: 'githubId',
    message: 'Enter your github id: ',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err => console.log(err ? err : 'success!'));
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile('./newReadme/README.md', answers);
  });
}

// Function call to initialize app
init();
