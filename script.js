console.log("Hello, World!");

const choices = ["rock","paper","scissors"];
let gameCount = 1;
let userScore = 0;
let computerScore = 0;
let state = 0;

function getComputerChoice() {
    choiceInt = Math.floor(Math.random() * 3);
    switch (choiceInt) {
        case 0: 
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function getUserChoice(gameCount, userScore, computerScore) {
    rawChoice = prompt(`
        Game: ${gameCount}
        Score: 
            You: ${userScore} 
            Computer: ${computerScore}

        Rock, Paper or Scissors?
        `);
    cleanChoice = rawChoice.toLowerCase()
    if (choices.indexOf(cleanChoice) > -1) {
        return cleanChoice;
    }
    else {
        console.log("BAD USER INPUT") ;
        return;
    } 
}

function scoreLogic(state) {
    if (state) {
        userScore += 1
    }
    else {
        computerScore += 1
    }
    return;
}