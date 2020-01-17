const inquirer = require("inquirer");
//const fs = require("fs");

inquirer
    .prompt([{
            type: "input",
            message: "What is your e-mail address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your id number?",
            name: "id"
        },
        {
            type: "list",
            message: "What is your role in the company?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ])
    .then(function(response) {
        if (response.role === "Manager") {
            inquirer.prompt([{
                type: "input",
                message: "What is your office number?",
                name: "office"
            }])
        }
        if (response.role === "Engineer") {
            inquirer.prompt([{
                type: "input",
                message: "What is your GitHub URL?",
                name: "github"
            }])
        } else {
            inquirer.prompt([{
                type: "input",
                message: "What school are you attending?",
                name: "school"
            }])
        }
    });