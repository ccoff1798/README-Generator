const inquirer = require('inquirer');
const fs = require('fs');

// Questions for user input
const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'Enter Project Title'
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Enter Description'
  },
  {
    type: 'input',
    name: 'Install',
    message: 'Enter Installation Instructions'
  },
  {
    type: 'list',
    name: 'License',
    message: 'Pick License',
    choices: ['MIT', 'GPL', 'Apache', 'None']
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Enter Usage Instructions'
  },
  {
    type: 'input',
    name: 'Contributings',
    message: 'Enter Contributings'
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Enter Tests'
  }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('File written successfully!');
        }
    });
}

// Function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        
        // TODO: Format the answers and structure your README content as needed
        const readmeContent = `
# ${answers.Title}

## Description
${answers.Description}

## Installation
${answers.Install}

## License
${answers.License}

## Usage
${answers.Usage}

## Contributings
${answers.Contributings}

## Tests
${answers.Tests}
`;

        writeToFile("GeneratedREADME.md", readmeContent);
    } catch (error) {
        console.error("Error while collecting inputs:", error);
    }
}

// Call function to initialize app
init();
