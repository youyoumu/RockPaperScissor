// generating random number between 1 or 2 or 3
function getRandomNumber123() {
    let number = 0;
    number = Math.floor(Math.random() * 3) + 1;

    return number;
}

// function that return either rock, paper, or scissors for computer choice 
function getComputerChoice() {
    let computerChoice = getRandomNumber123();


    if (computerChoice === 1) {
        computerChoice = "rock";
    }
    else if (computerChoice === 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    console.log("Computer chooses",computerChoice)

    return computerChoice;
}


function getPlayerSelection() {
    let playerSelection = prompt("select Rock, Paper or Scissors")
    playerSelection = playerSelection.toLowerCase()
    console.log("Player chooses", playerSelection)
    return playerSelection;
}

function playRound() {
    let computerChoice = getComputerChoice()
    let playerSelection = playerSelectionUI
    let win

    if (computerChoice === "rock" && playerSelection === "rock") {
        console.log("Tie")
        win = 2
    }
    else if (computerChoice === "rock" && playerSelection === "paper") {
        console.log("You win")
        win = 1
    }
    else if (computerChoice === "rock" && playerSelection === "scissors") {
        console.log("You lose")
        win = 0
    }
    else if (computerChoice === "paper" && playerSelection === "rock") {
        console.log("You lose")
        win = 0
    }
    else if (computerChoice === "paper" && playerSelection === "paper") {
        console.log("Tie")
        win = 2
    }
    else if (computerChoice === "paper" && playerSelection === "scissors") {
        console.log("You win")
        win = 1
    }
    else if (computerChoice === "scissors" && playerSelection === "rock") {
        console.log("You win")
        win = 1
    }
    else if (computerChoice === "scissors" && playerSelection === "paper") {
        console.log("You lose")
        win = 0
    }
    else if (computerChoice === "scissors" && playerSelection === "scissors") {
        console.log("Tie")
        win = 2
    }
    else {
        console.log("invalid input")
    }

    return win;
}


function checkScore(computerScore,playerScore) {
    if (computerScore > playerScore) {
        console.log("Match result: You Lose");
    }
    else if (computerScore < playerScore) {
        console.log("Match result: You Win");
    }
    else {
        console.log("Match result: Tie");
    };
}

let buttons = document.querySelectorAll('.button');
let playerSelectionUI;

buttons.forEach(button => {
    button.addEventListener('click', () => click());

    function click() {
        console.log(`Player chooses ${button.id}`);
        getPlayerSelectionUI();
        playRound();
    }

    function getPlayerSelectionUI() {
        playerSelectionUI = button.id;
    }

})

















