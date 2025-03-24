// Function to calculate sum and product of numbers
function calculateSumAndProduct(numbers) {
    let sum = numbers.reduce((prev, curr) => prev + curr, 0);
    let product = numbers.reduce((prev, curr) => prev * curr, 1);

    console.log(`Sum of numbers: ${sum}`);
    console.log(`Product of numbers: ${product}`);
}

// Example: Taking user input (You can replace this with dynamic input)
let numArray = [1, 2, 3, 4, 5]; // Example array of numbers
calculateSumAndProduct(numArray);
