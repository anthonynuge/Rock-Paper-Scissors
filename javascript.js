// randomly determine computer selection
function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() *3) + 1);
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissor";
    }
}


// function single round of game return string declaring winner 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie! Both players chose ${computerSelection}`;
    } 
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    } else {
        if (computerSelection === "rock") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }
}

function game() {
    for (let i = 0; i < 5 ; i++) {
        let playerSelection = prompt("Type rock, paper, or scissor to play").toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(`Computer chose ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection));
    }
}


