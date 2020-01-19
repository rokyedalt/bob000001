//<--npm package for collecting user input-->
const inquirer = require("inquirer");
const fs = require("fs");
//<--Here we require the js files of employees to link their respective constructor functions-->
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
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
        //<--This method is repeated for each new employee. It uses the imported constructor function to create an object for each new employee-->
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.office)
            //<--We push a new employee into empty employee array-->
        teamMembers.push(manager);
        idArray.push(response.managerId);
        console.log(teamMembers);

        //<--Run function to ask other questions-->
        createTeam();
    });

//<--This function adds additional members to the team-->
function createTeam() {
    inquirer
        .prompt([{
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }])
        .then(userChoice => {
            //<--switch case is essentially an if else conditional which here determines how to proceed given user's input so far-->
            switch (userChoice.memberChoice) {
                case "Engineer":
                    inquirer
                        .prompt([{
                                type: "input",
                                message: "What is your engineer's name?",
                                name: "engineerName"
                            },
                            {
                                type: "input",
                                message: "What is your engineer's id number?",
                                name: "engineerId"
                            },
                            {
                                type: "input",
                                message: "What is your engineer's e-mail address?",
                                name: "engineerEmail"
                            },
                            {
                                type: "input",
                                name: "github",
                                message: "What is your engineer's GitHub username?",

                            }
                        ]).then(response => {
                            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.github);
                            //<--We push a new employee into empty employee array-->
                            teamMembers.push(engineer);
                            idArray.push(response.engineerId);
                            createTeam();
                        });

                    break;
                case "Intern":
                    inquirer
                        .prompt([{
                                type: "input",
                                message: "What is your intern's name?",
                                name: "internName"
                            },
                            {
                                type: "input",
                                message: "What is your intern's id number?",
                                name: "internId"
                            },
                            {
                                type: "input",
                                message: "What is your intern's e-mail address?",
                                name: "internEmail"
                            },
                            {
                                type: "input",
                                name: "school",
                                message: "What is your intern's school?",

                            }
                        ]).then(response => {
                            const intern = new Intern(response.internName, response.internId, response.internEmail, response.school);
                            //<--We push a new employee into empty employee array-->
                            teamMembers.push(intern);
                            idArray.push(response.internId);
                            createTeam();
                        })
                    break;
                default:
                    buildTeam();
            };
        })
}

function buildTeam() {
    console.log(teamMembers);
    try {
        let mainHTML = fs.readFileSync('index.html', 'utf8');
        let compiledData = ''

        for (let i = 0; i < teamMembers.length; i++) {
          console.log(i)
          compiledData += `${teamMembers[i].getTemplatedHtml()}`
        }

        mainHTML = mainHTML.replace('{{{DUMPINHERE}}}', compiledData)
        fs.writeFileSync('bobIsYourUncle.html', mainHTML)
    } catch(e) {
        console.log('Error:', e.stack);
    }
}

function fillHTML() {
    console.log(userInfo);
    htmlStr =
        ``;
}
