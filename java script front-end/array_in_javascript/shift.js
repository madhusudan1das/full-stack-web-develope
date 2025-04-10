// // Initial array
// let arr = [1, 2, 3, 4, 5];

// console.log("Original Array:", arr);  
// // Output: [1, 2, 3, 4, 5]

// // 1️⃣ Basic .shift() - Removing the first element
// let removedElement = arr.shift();
// console.log("After shift():", arr);  
// // Output: [2, 3, 4, 5]
// console.log("Removed Element:", removedElement);  
// // Output: 1

// // 2️⃣ shift() on a single-element array
// let singleElementArr = ["Hello"];
// let removedSingle = singleElementArr.shift();
// console.log("After shift() on single element:", singleElementArr);  
// // Output: []
// console.log("Removed Element:", removedSingle);  
// // Output: Hello

// // 3️⃣ shift() on an empty array
// let emptyArr = [];
// let removedEmpty = emptyArr.shift();
// console.log("After shift() on empty array:", emptyArr);  
// // Output: []
// console.log("Removed Element:", removedEmpty);  
// // Output: undefined

// // 4️⃣ Using shift() inside a loop
// let numbers = [10, 20, 30, 40];
// while (numbers.length > 0) {
//     let removed = numbers.shift();
//     console.log("Removed:", removed, "Remaining:", numbers);
// }
// /* Output:
//    Removed: 10 Remaining: [20, 30, 40]
//    Removed: 20 Remaining: [30, 40]
//    Removed: 30 Remaining: [40]
//    Removed: 40 Remaining: []
// */

// // 5️⃣ shift() with strings
// let words = ["JavaScript", "is", "fun"];
// words.shift();
// console.log("After shift() on words array:", words);  
// // Output: ['is', 'fun']
let value=[1,2,3,4,5];
value.shift();
console.log(value);