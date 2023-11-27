const inquirer = require('inquirer');
const express = require('express');
const app = express();
const db = require('./server')
app.use(express.urlencoded([{extended: false}]))
app.use(express.json())
const mainMenu = [{type: "list", name: "choice", message: "Please choose one", choices: ["view all departments", "view all roles", "view all employee", "add a department", "add a role", "add an employee", "update an employee role"],}]

const start = async() => {
    await inquirer.prompt(mainMenu).then(data => {console.log(data.choice)})
}

start()