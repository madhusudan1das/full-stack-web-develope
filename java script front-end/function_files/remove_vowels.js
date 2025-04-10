let removeVowels = (str) => str.replace(/[aeiouAEIOU]/g, '');

let result = removeVowels("function");

console.log(result);  // Output: "fntn"


// function removeVowels(str) {
//     let result = ""; // Empty string to store characters without vowels
//     for (const char of str) {
//         if (char !== "a" && char !== "e" && char !== "i" && char !== "o" && char !== "u" &&
//             char !== "A" && char !== "E" && char !== "I" && char !== "O" && char !== "U") {
//             result += char; // Append non-vowel characters to result
//         }
//     }
//     console.log(result); // Print the result without vowels
// }

// removeVowels("hello");  // Output: "hll"
