function getEvenNumbers(n) {
    const numbers = Array.from({ length: n }, (_, i) => i + 1); // Generate numbers from 1 to n
    const evenNumbers = numbers.filter(num => num % 2 === 0); // Filter even numbers
    console.log("Generated Numbers:", numbers);
    console.log("Even Numbers:", evenNumbers);
}

getEvenNumbers(10);
