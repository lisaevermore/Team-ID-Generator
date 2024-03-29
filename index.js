const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = [];
const breakLine = ('===============================');

function promptManager() {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter the team manager\'s name:',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Enter the team manager\'s employee ID:',
      name: 'id',
    },
    {
      type: 'input',
      message: 'Enter the team manager\'s email address:',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Enter the team manager\'s office number:',
      name: 'officeNumber',
    },
  ]).then((responses) => {
    const { name, id, email, officeNumber } = responses;
    const manager = new Manager(name, id, email, officeNumber);
    teamMembers.push(manager);

    console.log(breakLine);
    console.log('Manager added to team roster!');
    console.log(breakLine);
    console.log(manager);
    
    promptAddTeamMember()
  });
}

function promptAddTeamMember() {
    return inquirer.prompt([
      {
        type: 'list',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'Finish building the team'],
        name: 'memberType',
      },
    ]).then((response) => {
      switch (response.memberType) {
        case 'Engineer':
          promptEngineer();
          break;
        case 'Intern':
          promptIntern();
          break;
        case 'Finish building the team':
          console.log(breakLine);
          console.log('Team roster building completed!');
          console.log(breakLine);
          let teamHtml = render(teamMembers);
          // console.log(teamHtml);
   
          fs.writeFileSync("index.html",teamHtml)
          
          break;
        default:
            console.log(breakLine);
          console.error('Unknown member type:', response.memberType);
          console.log(breakLine);
          break;
      }
    });
}

function promptEngineer(){
    return inquirer.prompt([
        {
          type: 'input',
          message: 'Enter the Engineer name:',
          name: 'name',
        },
        {
          type: 'input',
          message: 'Enter the Engineer employee ID:',
          name: 'id',
        },
        {
          type: 'input',
          message: 'Enter the Engineer email address:',
          name: 'email',
        },
        {
          type: 'input',
          message: 'Enter the Engineer GitHub:',
          name: 'github',
        },
      ]).then((responses) => {
        const { name, id, email, github } = responses;
        const engineer = new Engineer(name, id, email, github);
        teamMembers.push(engineer);
        console.log(breakLine);
        console.log('An Engineer had been added to team!');
        console.log(breakLine);

        console.log(engineer)
        promptAddTeamMember();
      });

}

function promptIntern(){
    return inquirer.prompt([
        {
          type: 'input',
          message: 'Enter the Intern name:',
          name: 'name',
        },
        {
          type: 'input',
          message: 'Enter the Intern employee ID:',
          name: 'id',
        },
        {
          type: 'input',
          message: 'Enter the Intern email address:',
          name: 'email',
        },
        {
          type: 'input',
          message: 'Enter the Intern School name:',
          name: 'school',
        },
      ]).then((responses) => {
        const { name, id, email, school } = responses;
        const intern = new Intern(name, id, email, school);
        teamMembers.push(intern);
        console.log(breakLine);
        console.log('A Intern had been added to team!');
        console.log(breakLine);
        console.log(intern);
         promptAddTeamMember();
      });
}

promptManager();
