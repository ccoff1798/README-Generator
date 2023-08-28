// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ['Enter Project Title', 'Enter Description', 'Enter Intallation Instructions','Pick License','Enter Usage Instructions', 'Enter Contributings', 'Enter Tests'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//Inquierer Prompts
inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: questions[0],
    },
    {
        type: 'input',
        name: 'Description',
        message: questions[1],
      },
      {
        type: 'input',
        name: 'Install',
        message: questions[2],
      },
  ])

  //This is residual from the code
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });
