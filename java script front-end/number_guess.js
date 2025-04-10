// l
// let number=25;
// let input=prompt("enter the number" );
// while(input!=number){
//     input=prompt("you guess incorect ,guess again: ");
//     }
//     console.log("guess correct");


// Generate a random number between 1 and 100
let number = Math.floor(Math.random() * 100) + 1;

let input = Number(prompt("Enter a number between 1 and 100:"));

while (number!== input) {
    if (input < number) {
        input = Number(prompt("Too low! Guess again:"));
    } else {
        input = Number(prompt("Too high! Guess again:"));
    }
}

console.log("🎉 Guess correct!");
alert(`🎉 Congratulations! You guessed the correct number: ${number}`);
