console.log("Hello, World!");

const choices = ["rock","paper","scissors"];
let gameCount = 1;
let userScore = 0;
let computerScore = 0;
let state = 0;

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

function getUserChoice(gameCount, userScore, computerScore) {
    let rawChoice = prompt(`
        Game: ${gameCount}
        Score: 
            You: ${userScore} 
            Computer: ${computerScore}

        Rock, Paper or Scissors?
        `);
    let cleanChoice = rawChoice.toLowerCase()
    if (choices.indexOf(cleanChoice) > -1) {
        return cleanChoice;
    }
    else {
        console.log("BAD USER INPUT") ;
        return;
    } 
}

function scoreLogic(state) {
    if (state === "DRAW") {
        alert("It was a draw!")
        return;
    }
    else if (state) {
        alert("Good Job! You win!")
        userScore += 1;
    }
    else {
        alert("Better Luck next time!")
        computerScore += 1;
    }
    return;
}

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

function roundLogic() {
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice(gameCount,userScore,computerScore);
    let gameResult = gameLogic(userChoice,computerChoice);
    scoreLogic(gameResult);
    gameCount += 1;
}

for (let i = 0; i < 4; i++) {
    roundLogic()
}