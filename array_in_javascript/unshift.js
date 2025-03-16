// Initial array
let arr = [3, 4, 5];

// 1️⃣ Basic .unshift() - Adding elements at the beginning
arr.unshift(1, 2);
console.log("After unshift(1,2):", arr); 
// Output: [1, 2, 3, 4, 5]

// 2️⃣ unshift() returning the new length
let newLength = arr.unshift(0);
console.log("After unshift(0):", arr);  
// Output: [0, 1, 2, 3, 4, 5]
console.log("New length:", newLength);  
// Output: 6

// 3️⃣ Using unshift() with an empty array
let emptyArr = [];
emptyArr.unshift("Apple", "Banana");
console.log("After unshift() on empty array:", emptyArr);  
// Output: ['Apple', 'Banana']

// 4️⃣ Using unshift() with strings
let strArr = ["World"];
strArr.unshift("Hello");
console.log("After unshift('Hello'):", strArr);  
// Output: ['Hello', 'World']

// 5️⃣ Using unshift() with numbers
let numbers = [20, 30, 40];
numbers.unshift(10);
console.log("After unshift(10):", numbers);  
// Output: [10, 20, 30, 40]
