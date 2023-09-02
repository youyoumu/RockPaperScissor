console.log("Hello World")

// generating random number between 1 or 2 or 3
function randomNumber123() {
    let number = 0;
    number = Math.floor(Math.random() * 3) + 1;

    return number;
}

// function that return either rock, paper, or scissor for computer choice 
function getComputerChoice() {
    let computerChoice = randomNumber123();

    console.log(computerChoice)

    if (computerChoice === 1) {
        computerChoice = "rock";
    }
    else if (computerChoice === 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissor";
    }

    console.log("computer choose",computerChoice)

    return computerChoice;
}


function getPlayerSelection() {
    let playerSelection = prompt("select Rock, Paper or Scissor")
    playerSelection = playerSelection.toLowerCase()
    console.log("player choose", playerSelection)
    return playerSelection;
}

function playRound() {
    let computerChoice = getComputerChoice()
    let playerSelection = getPlayerSelection()

    if (computerChoice === "rock" && playerSelection === "rock") {
        console.log("tie")
    }
    else if (computerChoice === "rock" && playerSelection === "paper") {
        console.log("you win")
    }
    else if (computerChoice === "rock" && playerSelection === "scissor") {
        console.log("you lose")
    }
    else if (computerChoice === "paper" && playerSelection === "rock") {
        console.log("you lose")
    }
    else if (computerChoice === "paper" && playerSelection === "paper") {
        console.log("tie")
    }
    else if (computerChoice === "paper" && playerSelection === "scissor") {
        console.log("you win")
    }
    else if (computerChoice === "scissor" && playerSelection === "rock") {
        console.log("you win")
    }
    else if (computerChoice === "scissor" && playerSelection === "paper") {
        console.log("you lose")
    }
    else if (computerChoice === "scissor" && playerSelection === "scissor") {
        console.log("tie")
    }
    else {
        console.log("invalid input")
    }
}

playRound();