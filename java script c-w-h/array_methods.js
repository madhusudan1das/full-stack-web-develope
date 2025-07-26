// Create an array
let arr = [10, 20, 30, 40];

// 1. push() → Add to the end
arr.push(50); // arr = [10, 20, 30, 40, 50]

// 2. unshift() → Add to the beginning
arr.unshift(5); // arr = [5, 10, 20, 30, 40, 50]

// 3. pop() → Remove from the end
arr.pop(); // Removes 50

// 4. shift() → Remove from the beginning
arr.shift(); // Removes 5

// 5. splice(index, deleteCount, item1, item2, ...) → Add/Remove at any position
arr.splice(2, 0, 25); // Insert 25 at index 2 → [10, 20, 25, 30, 40]
arr.splice(3, 1);     // Remove 1 element at index 3 → [10, 20, 25, 40]

// 6. slice(start, end) → Copy a portion
let sliced = arr.slice(1, 3); // [20, 25] — doesn't modify original array

// 7. concat() → Combine arrays
let newArr = arr.concat([60, 70]); // [10, 20, 25, 40, 60, 70]

// 8. indexOf() → First index of value
let idx = arr.indexOf(25); // 2

// 9. lastIndexOf() → Last index of value
let lastIdx = arr.lastIndexOf(25); // 2

// 10. includes() → Check if value exists
let found = arr.includes(40); // true

// 11. forEach() → Loop through array
arr.forEach((value, index) => {
  console.log(`Index ${index}: Value ${value}`);
});

// 12. map() → Transform each element
let squared = arr.map(val => val * val); // [100, 400, 625, 1600]

// 13. filter() → Filter elements based on condition
let filtered = arr.filter(val => val > 20); // [25, 40]

// 14. reduce() → Reduce to a single value
let sum = arr.reduce((acc, val) => acc + val, 0); // 95

// 15. sort() → Sort elements (by default: lexicographic)
arr.sort((a, b) => a - b); // Ascending sort → [10, 20, 25, 40]

// 16. reverse() → Reverse the array
arr.reverse(); // [40, 25, 20, 10]

// 17. find() → First element that matches condition
let firstBig = arr.find(val => val > 20); // 40

// 18. findIndex() → Index of first matching element
let firstBigIdx = arr.findIndex(val => val > 20); // 0

// 19. fill() → Fill all or part of array with a value
arr.fill(0, 1, 3); // Fill 0 from index 1 to 3 → [40, 0, 0, 10]

// 20. every() → Check if all values meet condition
let allBelow50 = arr.every(val => val < 50); // true

// 21. some() → Check if at least one meets condition
let hasZero = arr.some(val => val === 0); // true

// 22. toString() → Converts array to string
let str = arr.toString(); // "40,0,0,10"

// 23. join() → Join with custom separator
let joined = arr.join(" - "); // "40 - 0 - 0 - 10"


let arr1 = [1, 2, 3, 4];
arr1.splice(2, 1);  // Remove 1 element at index 2
console.log(arr1); // [1, 2, 4]
let arr2 = [1, 2, 3, 4];
delete arr2[2];
console.log(arr2); // [1, 2, undefined,4]
