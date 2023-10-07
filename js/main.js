/* Conditionals: IF Statements Syntax

let variable;
let var2 = "something";
let moreVars = "something elses";

if (condition aka specific variable) {
    run some code ;
} else if (another condition or variable) {
    run some different code ;
} else if (yet another condition or variable) {
    run some more different code ;
} else {
    if (a nested condition) {
        run some nested condition code ;
    } else {
        run other nested condition code ;
    }
}
console.log(message);
*/

// Decision Tree
// random options = "rock", "paper", "scissors"
const options = ["rock", "paper", "scissors"];
let optionA = options[Math.floor(Math.random() * options.length)];
let optionB = options[Math.floor(Math.random() * options.length)];
let playerOne = optionA;
let playerTwo = optionB; 
let message;

if (playerOne === playerTwo) {
    //tie game! - look for tie first or have to go through all code
    message = `It's a tie: ${playerOne} & ${playerTwo}!`;
} else if (playerOne === "rock"){
    if (playerTwo === "paper"){
        // playerTwo wins ;
        message = `Player Two Wins: ${playerOne} vs. ${playerTwo}!`;
    } else {
        // playerOne wins ;
        message = `Player One Wins: ${playerOne} vs. ${playerTwo}!`;
    }
} else if (playerOne === "paper"){
    if (playerTwo === "scissors"){
        // playerTwo wins ;
        message = `Player Two Wins: ${playerOne} vs. ${playerTwo}!`;
    } else {
        // playerOne wins ;
        message = `Player One Wins: ${playerOne} vs. ${playerTwo}!`;
    }
} else {
    if (playerTwo === "rock"){
        //playerTwo wins ;
        message = `Player Two Wins: ${playerOne} vs. ${playerTwo}!`;
    } else {
        //playerOne wins ;
        message = `Player One Wins: ${playerOne} vs. ${playerTwo}!`;
    }
}
console.log(message);

