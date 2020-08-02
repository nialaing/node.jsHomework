// I'm using the inquirer npm package.

const inquirer = require("inquirer");

// I'm also requiring 'fs'.

const fs = require('fs');

// I am requiring my greeting file.

const greeting = require("./greeting.js");

// I'm requiring my http module.

const http = require("http");

// Console log my greeting.

console.log(greeting);

// Create my server.

const port = "5500";
const hostname = "127.0.0.1";
const server = http.createServer(function(req, res) {})

// Confirming my server.

const serverReady = 
  "Server ready."
  console.log(serverReady);

// I'm making a function called userQuestions that will prompt user for a password.

function userQuestions (){}

// Now I want to prompt user input. 

inquirer
  .prompt([
    {
      type: "input",
      message: "What's your username?",
      name: "password"
    },
    {
      type: "password",
      message: "What's your password?",
      name: "password"
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm"
    }
  ]);

.then(function(response) {

  if (response.confirm === response.password) {
    console.log("Success!");
  }
  else {
    console.log("You forgot your password already?!");
  }
});

// I want to store the information that the user enters into my userPassword.txt file.


      fs.writeFile("./userPassword.txt",data.username + " : " + data.password, function(err) {

      fs.appendFile("userPassword.txt",data.username + " : " + data.password, function(err) {

      if (err) {
          return console.log(err);
      }else{
          console.log("Success!");
      }
});