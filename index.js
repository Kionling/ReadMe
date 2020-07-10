const prompt = require('inquirer').createPromptModule()
const fs = require('fs')

const api = require('./utils/api.js')
const generateMarkdown = require('./utils/generateMarkdown.js')

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName + '.md', data, error => error ? console.error(error) : console.log(`${fileName + '.md'} generated!`))
  }