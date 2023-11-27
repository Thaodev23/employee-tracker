const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
    {host:'localhost', 
     user: process.env.DB_USER, password: process.env.DB_PASSWORD, database: process.env.DB_NAME},
     console.log("database employee_tracker is connected")
);

app.listen(PORT, () => {console.log(`server is running on ${PORT}`)})

module.exports = db;