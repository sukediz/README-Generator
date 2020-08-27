const inquirer = require("inquirer");
const fs = require("fs");
const generateMD = require("./utils/generateMarkdown")


// array of questions for user
const questions = [{
    type: "input",
    name: "title",
    message: "Enter your project title?",
},
{
    type: "input",
    name: "description",
    message: "Enter a brief description of your project",
},
{
    type: "input",
    message: "Outline basic steps for installation.",
    name: "installation"
},
{
    type: "input",
    message: "Describe the usage of your project after installation. ",
    name: "usage"
},
{
    type: "input",
    message: "Outline any test instructions.",
    name: "test"
},
{
    type: "input",
    message: "Explain if you are open to contributions and the steps to do so.",
    name: "contributing"
},
{
    type: "list",
    message: "Specify the license type you have for this project.",
    choices: ["ISC", "BSD 3-Clause", "MIT", "Apache License 2.0", "GNU GPLv3"],
    name: "license"
},
{
    type: "input",
    message: "Enter your github username?",
    name: "username"
},
{
    type: "input",
    message: "Enter your email address.",
    name: "email"
}];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, handleError);
}

const handleError = err => {
    if (err) {
        return console.log(err);
    } else {
    console.log("Success! You have created a README.md for your project.");
    }
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => writeToFile('README.md', generateMD(response)));
}

// function call to initialize program
init();
