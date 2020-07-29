// The `userInput` file must use `node.js` `fs` 

var fs = require("fs");

fs.writeFile("log.txt", process.argv[2], function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("Success!");

});

// The `userInput` file shall use `inquirer` npm dependency


// The `userInput` file shall `require` the `greeting` file 

// The `userInput` file shall `console.log` your greeting before `userQuestions`

// The `userInput` file must include a `function` called `userQuestions`

// The `function` `userQuestions` should prompt user input