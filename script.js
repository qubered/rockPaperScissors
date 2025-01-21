// Variable Declarations 
const choices = ["rock","paper","scissors"];

let userScore = 0;
let computerScore = 0;
let state = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");
const resultP = document.querySelector("#resultP");
const computerResult = document.querySelector("#computerResult");
const userScoreSpan = document.querySelector("#userScore");
const computerScoreSpan = document.querySelector("#computerScore");

userScoreSpan.textContent = userScore;
computerScoreSpan.textContent = computerScore;

// Generates a random number between 0 and 2, then maps it to the choice and returns that.
function getComputerChoice() {
    let choiceInt = Math.floor(Math.random() * 3);
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

// Prompts the user to get their choice for the game. Tells the user the round the game is on, their score and the computers score.
function getUserChoice(gameCount, userScore, computerScore) {
    let rawChoice = prompt(`
        Round: ${gameCount} / 5
        Score: 
            You: ${userScore} 
            Computer: ${computerScore}

        Rock, Paper or Scissors?
        `);
    if (!rawChoice) { //Returns a computer generated choice if the user cancels the prompt.
        console.log("USER DID NOT CHOOSE")
        return getComputerChoice();
    }
    let cleanChoice = rawChoice.toLowerCase() // Cleans the users input and makes it lowercase.
    if (choices.indexOf(cleanChoice) > -1) { // Checks if the user choice is one of the 3 choices.
        return cleanChoice;
    }
    else { // Returns a computer generated choice if the user provides a wrong input
        console.log("BAD USER INPUT") ;
        return getComputerChoice();
    } 
}
// Creates Alerts to the user to tell them the state of the game and assign points.
function scoreLogic(state) {
    if (state === "DRAW") {
        resultP.className = "text-yellow-500 font-semibold";
        resultP.textContent = "A Draw!";
        return;
    }
    else if (state) {
        userScore += 1;
        userScoreSpan.textContent = userScore;
        resultP.className = "text-green-500 font-semibold";
        resultP.textContent = "You Win!";
    }
    else {
        computerScore += 1;
        computerScoreSpan.textContent = computerScore;
        resultP.className = "text-red-500 font-semibold";
        resultP.textContent = "Better luck next time!";
    }
    return;
}

// Runs the game round 0 is a loss state for the plater, 1 is a win state for the player.
function gameLogic(userChoice,computerChoice) {
    // If the computer and user choose the same item, the game is a draw
    if (userChoice === computerChoice) {
        return "DRAW";
    }
    else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return 0;
        }
        else if (computerChoice === "scissors") {
            return 1
        }
    }
    else if (userChoice === "paper") {
        if (computerChoice === "rock"){
            return 1;
        }
        else if (computerChoice === "scissors") {
            return 0;
        }
    }
    else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return 0;
        }
        else if (computerChoice === "paper") {
            return 1;
        }
    }

}
// Controls the overall game, gets the computer and user inputs and gets the results and assigns them
function roundLogic(userChoice) {
    let computerChoice = getComputerChoice();
    let gameResult = gameLogic(userChoice,computerChoice);
    scoreLogic(gameResult);
    computerResult.textContent = "The Computer Choose: "+computerChoice;
}


rockButton.addEventListener("click", () => {
    console.log(roundLogic("rock"));
});
paperButton.addEventListener("click", () => {
    console.log(roundLogic("paper"));
});
scissorButton.addEventListener("click", () => {
    console.log(roundLogic("scissors"));
});