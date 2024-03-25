#! usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "please enter a number between 1-6 : "
    }]);
// console.log(answer);
if (answer.userGuessedNumber === randomNumber) {
    console.log("your guess is correct and you won a bike .");
}
else {
    console.log("batter luck next time, bye bye .");
}
