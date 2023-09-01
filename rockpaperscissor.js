console.log("Hello World")

// generating random number between 1 or 2 or 3
function randomNumber123() {
    let number = 0;
    number = Math.floor(Math.random() * 3) + 1;

    return number;
}
console.log(randomNumber123())
