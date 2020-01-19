//<--npm package for collecting user input-->
const inquirer = require("inquirer");
//const fs = require("fs");
//<--Here we require the js files of employees to link their respective constructor functions-->
// const Intern = require("../lib/Intern");
// const Engineer = require("../lib/Engineer");
const Manager = require("./lib/Manager");

//<--This is the array we're pushing team members to if user elects to add another team member. This data then gets rendered to the created html-->
const teamMembers = [];
const idArray = [];

inquirer
    .prompt([{
            type: "input",
            message: "What is your manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is your manager's id number?",
            name: "managerId"
        },
        {
            type: "input",
            message: "What is your manager's e-mail address?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "office"
        }
    ])
    .then(response => {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.office)
        teamMembers.push(manager);
        idArray.push(response.managerId);
        createTeam();
    });

function createTeam() {
    inquirer
        .prompt([{
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }])
}



// inquirer.prompt([{
//         type: "confirm",
//         message: "Would you like to add another team member?",
//         name: "addMember"
//     },

//]);
// if (response.role === "Manager") {
//     inquirer.prompt([{
//         type: "input",
//         message: "What is your office number?",
//         name: "office"
//     }])
// }
// if (response.role === "Engineer") {
//     inquirer.prompt([{
//         type: "input",
//         message: "What is your GitHub URL?",
//         name: "github"
//     }])
// } else {
//     inquirer.prompt([{
//         type: "input",
//         message: "What school are you attending?",
//         name: "school"
//     }])
//}


// function fillHTML() {
//     console.log(userInfo);
//     htmlStr =
//         `
//             `;
// }