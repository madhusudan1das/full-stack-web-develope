// let number = Math.floor(Math.random() * 100) + 1;  // Random number from 1 to 100
// let num = 0;

// while (num !== number) {
//     num = parseInt(prompt("Guess the number (1-100):"));

//     if (num < number) {
//         alert("Too low, guess higher!");
//     } else if (num > number) {
//         alert("Too high, guess lower!");
//     } else {
//         alert("You guessed it!");
//     }
// }




const readlineSync = require('readline-sync');

let number = Math.floor(Math.random() * 100) + 1;  // Random number from 1 to 100
let num = 0;

while (num !== number) {
    num = parseInt(readlineSync.question("Guess the number (1-100): "));

    if (num < number) {
        console.log("Too low, guess higher!");
    } else if (num > number) {
        console.log("Too high, guess lower!");
    } else {
        console.log("You guessed it!");
    }
}
