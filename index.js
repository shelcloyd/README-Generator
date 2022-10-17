// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateMd = ({title, description, installation, usage, contributions, instructions, license, link, github, contact}) =>
`# ${title}
## Description
> ${description}
___
## Installation Instructions
> ${installation}
___
## Intended Usage
> ${usage}
___
## Contributions
> ${contributions}
___
## How to Use ${title}
> ${instructions}
___
## License
* ${license}
___
## Link to Application
* ${link}
___
## Contact Me
* ${github}
* ${contact}
`

// TODO: Create an array of questions for user input
// const questions = [
    inquirer
    .prompt([
    {
        type: "input",
        message: "What is your application's name?",
        name: "title",
    },
    {
        type: "input",
        message: "Please enter a description for your application.",
        name: "description",
    },
    {
        type: "input",
        message: "What are the intallation instructions for your application?",
        name: "installation",
    },
    {
        type: "input",
        message: "How will your application be used?",
        name: "usage",
    },
    {
        type: "input",
        message: "How can users contribute to your application?",
        name: "contributions",
    },
    {
        type: "input",
        message: "Please enter instructions for how to test your application.",
        name: "instructions",
    },
    {
        type: "list",
        message: "Would you like to add a license to your application?",
        name: "license",
        choices: ["MIT License", "Boost Software License 2.0", "Apache License 2.0", "The Unlicense"],
    },
    {
        type: "input",
        message: "Paste the link to your application here.",
        name: "link",
    },
    {
        type: "input",
        message: "Please enter your GitHub username.",
        name: "github",
    },
    {
        type: "input",
        message: "Please enter your email address.",
        name: "contact",
    },
])
.then((data) => {
    const readMe = generateMd(data);

    fs.writeFile("README.md", readMe, (err) =>
    err ? console.error(err) : console.log("You did it!")
    );
})
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
