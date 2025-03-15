// // // // // // {
// // // // // // let cars = ["Tata", "Mahindra", "Lambo"];
// // // // // // cars.push("BMW"); // Adding "BMW" to the end
// // // // //                                                                            //Pushing a Single Element
// // // // // // console.log(cars); // Output: [ 'Tata', 'Mahindra', 'Lambo', 'BMW' ]
// // // // // //}


// // // // //{
// // // // // let fruits = ["Apple", "Banana"];
// // // // // fruits.push("Mango", "Orange");       
// // // //                                                                               //Pushing Multiple Elements
// // // // // console.log(fruits); // Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// // // // //}




// // // // let numbers = [1, 2, 3];
// // // // let newLength = numbers.push(4, 5);
// // // // //                                                             Example 3: Using push() and Checking the New Length 
// // // // console.log(numbers);  // Output: [1, 2, 3, 4, 5]
// // // // console.log(newLength); // Output: 5 (new length of the array)



// // // let arr = [];
// // // for (let i = 1; i <= 5; i++) {
// // //     arr.push(i); // Adds numbers 1 to 5
// // // }                                                        //Example 4: Using push() in a Loop
// // // console.log(arr); // Output: [1, 2, 3, 4, 5]



// // let originalArray = [10, 20];
// // let newArray = [...originalArray, 30, 40]; // Creates a new array
// //                                                         //Alternative: Using spread Operator Instead of push()
// // console.log(newArray); // Output: [10, 20, 30, 40]

// ✔ push() modifies the original array.
// ✔ It returns the new length of the array.
// ✔ You can add multiple elements at once.
// ✔ If you need a new array instead of modifying, use the spread operator (...).