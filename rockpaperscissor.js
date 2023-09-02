// generating random number between 1 or 2 or 3
function randomNumber123() {
    let number = 0;
    number = Math.floor(Math.random() * 3) + 1;

    return number;
}

// function that return either rock, paper, or scissor for computer choice 
function getComputerChoice() {
    let computerChoice = randomNumber123();


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
    let win

    if (computerChoice === "rock" && playerSelection === "rock") {
        console.log("tie")
        win = 2
    }
    else if (computerChoice === "rock" && playerSelection === "paper") {
        console.log("you win")
        win = 1
    }
    else if (computerChoice === "rock" && playerSelection === "scissor") {
        console.log("you lose")
        win = 0
    }
    else if (computerChoice === "paper" && playerSelection === "rock") {
        console.log("you lose")
        win = 0
    }
    else if (computerChoice === "paper" && playerSelection === "paper") {
        console.log("tie")
        win = 2
    }
    else if (computerChoice === "paper" && playerSelection === "scissor") {
        console.log("you win")
        win = 1
    }
    else if (computerChoice === "scissor" && playerSelection === "rock") {
        console.log("you win")
        win = 1
    }
    else if (computerChoice === "scissor" && playerSelection === "paper") {
        console.log("you lose")
        win = 0
    }
    else if (computerChoice === "scissor" && playerSelection === "scissor") {
        console.log("tie")
        win = 2
    }
    else {
        console.log("invalid input")
    }

    console.log(win)
    return win;
}

function game() {
    let computerScore = 0
    let playerScore = 0

    let win = playRound();
    if (win === 1) {
        playerScore = playerScore + 1

    }
    else if (win === 0) {
        computerScore = computerScore + 1
    }
    else {}

    win = playRound();
    if (win === 1) {
        playerScore = playerScore + 1

    }
    else if (win === 0) {
        computerScore = computerScore + 1
    }
    else {}

    win = playRound();
    if (win === 1) {
        playerScore = playerScore + 1

    }
    else if (win === 0) {
        computerScore = computerScore + 1
    }
    else {}

    win = playRound();
    if (win === 1) {
        playerScore = playerScore + 1

    }
    else if (win === 0) {
        computerScore = computerScore + 1
    }
    else {}

    win = playRound();
    if (win === 1) {
        playerScore = playerScore + 1

    }
    else if (win === 0) {
        computerScore = computerScore + 1
    }
    else {}
    
    console.log(computerScore, playerScore)
}

game()

