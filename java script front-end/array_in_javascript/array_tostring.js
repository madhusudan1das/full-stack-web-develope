// // // // // let cars = ["Tata", "Mahindra", "Lambo"];
// // // // // let result = cars.toString();

// // // // // console.log(result); // Output: "Tata,Mahindra,Lambo"      //Example 1: Converting an Array to a String
// // // // // console.log(typeof result); // Output: "string"



// // // // let numbers = [10, 20, 30, 40];
// // // // console.log(numbers.toString()); // Output: "10,20,30,40"
// // // // console.log(typeof numbers);                            //Example 2: toString() with Numbers



// // // let mixedArray = ["Hello", 100, true, null, undefined];
// // // console.log(mixedArray.toString()); 
// // // // Output: "Hello,100,true,,"                       //Example 3: toString() with Mixed Data Types
// // // //null and undefined are converted to empty strings



// // let fruits = ["Apple", "Banana", "Mango"];
// // console.log(fruits.join(" - ")); // Output: "Apple - Banana - Mango"
// // //join(" - ") allows custom separators, unlike toString().
// //join(" - ") allows custom separators, unlike toString().


// ✔ .toString() converts an array to a comma-separated string.
// ✔ It does NOT modify the original array.
// ✔ For custom separators, use .join() instead.