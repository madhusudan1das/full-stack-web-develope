// Define multiple arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

// Merging all arrays using .concat()
let mergedArray = arr1.concat(arr2, arr3);

// Adding extra values while merging
let mergedWithExtra = arr1.concat("X", "Y", arr2, "Z", arr3);

// Flattening a nested array using concat() and .flat()
let nestedArray = [1, [2, 3], [4, 5]];
let flattenedArray = nestedArray.concat().flat(); 

// Print results
console.log("Merged Array:", mergedArray); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("Merged with Extra Values:", mergedWithExtra); 
// Output: [1, 2, 3, 'X', 'Y', 4, 5, 6, 'Z', 7, 8, 9]

console.log("Flattened Array:", flattenedArray); 
// Output: [1, 2, 3, 4, 5]
