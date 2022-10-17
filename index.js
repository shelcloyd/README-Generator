// packages used for project
const fs = require("fs");
const inquirer = require("inquirer");

// structure of README.md file to be generated
const generateMd = ({ title, description, installation, usage, contributions, instructions, license, link, github, contact }) =>
    `# **${title}**

___

#### **Table of Contents**
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [How to Use](#instructions)
* [License](#license)
* [Link to Application](#link)
* [Contact](#contact)

___

<div id="description"></div>

## **Description**
${description}

___

<div id="installation"></div>

## **Installation Instructions**
${installation}

___

<div id="usage"></div>

## **Intended Usage**
${usage}

___

<div id="contributions"></div>

## **Contributions**
${contributions}

___

<div id="instructions"></div>

## **How to Use ${title}**
${instructions}

___

<div id="license"></div>

## **License**
* ${license}

___

<div id="link"></div>

## **Link to Application**
* ${link}

___

<div id="contact"></div>

## **Questions?**
* GitHub: ${github}
* Email:  ${contact}
`

// questions to gather data for file creation
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
            choices: ["MIT License", "Boost Software License 1.0", "Apache License 2.0", "The Unlicense"],
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
    // create file
    .then((data) => {
        const readMe = generateMd(data);

        fs.writeFile("README.md", readMe, (err) =>
            err ? console.error(err) : console.log("You did it!")
        );
    });


