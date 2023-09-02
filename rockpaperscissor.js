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

    return computerChoice;
}

console.log(getComputerChoice())
