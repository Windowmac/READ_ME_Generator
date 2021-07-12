const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    console.log(err ? err : 'success!')
  );
}

module.exports = writeToFile;
