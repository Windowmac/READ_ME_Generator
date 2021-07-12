
const inquirer = require('inquirer');
const generateMarkdown = require('./assets/js/generateMarkdown');
const fs = require('fs');

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
    name: 'video',
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
    name: 'tests',
    message: 'Enter the test methods for your project',
    default: 'none yet'
  },
  {
    type: 'input',
    name: 'collaboration',
    message: 'How should someone collaborate with the project?',
    default: `For now, just follow the [Contributor Covenant](https://www.contributor-covenant.org/)`,
  },
  {
    type: 'input',
    name: 'githubId',
    message: 'Enter your github id: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the email address for this project: ',
  },
];


function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err => console.log(err ? err : 'success!'));
}


function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile('./newReadme/README.md', answers);
  });
}

init();
