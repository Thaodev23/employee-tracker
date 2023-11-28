const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
const app = express();
const db = require('./server.js');
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Below: line 10 to line 40 => these are the options to pick from and the methods to run it. 
const mainMenu = [
 {
    type: "list",
    name: "choice",
    message: "Please choose one", 
    choices: ["view all departments", "view all roles", "view all employee", "add a department", "add a role", "add an employee", "update an employee role"],
  }
]

const pickOption = (option) => {
  if (option == "view all departments") {
    seeAllDepartment();
  }
  else if (option == "view all roles") {
    seeAllRoles();
  }
  else if (option == "view all employees") {
    seeAllEmployee();
  }
  else if (option == "add a department") {
    addNewDepartment();
  }
  else if (option == "add a role") {
    addNewRole();
  }
  else if (option == "add an employee") {
    addNewEmployee();
  }
  else if (option == "update an employee role") {
    updateEmployeeRole();
  }
}

// Below: runs the department to show all the department. 
const seeAllDepartment = async() => {
  db.query('SELECT * FROM department', function (err, res) {
    res.forEach(answer => console.log(answer.name));
    start();
  })
}

// Below: starts the main menu and also shows it. 
const start = async() => {
    await inquirer.prompt(mainMenu).then(data => {
      console.log(data.choice);
      pickOption(data.choice);
    })
  }

// const start = () => {
//     inquirer.prompt(mainMenu).then(data => {console.log(data.choice)})
// }

//  async function start () {
//      await inquirer.prompt(mainMenu).then(data => {console.log(data.choice)})
// }

start();



