// // // Initial array
// // let arr = [10, 20, 30, 40, 50];

// // console.log("Original Array:", arr);  
// // // Output: [10, 20, 30, 40, 50]

// // // 1️⃣ Removing elements using .splice()
// // let removedElements = arr.splice(1, 2); 
// // console.log("After Removing Elements:", arr);  
// // // Output: [10, 40, 50]
// // console.log("Removed Elements:", removedElements);  
// // // Output: [20, 30]

// // // 2️⃣ Adding elements using .splice()
// // arr.splice(1, 0, 25, 35);
// // console.log("After Adding Elements:", arr);  
// // // Output: [10, 25, 35, 40, 50]

// // // 3️⃣ Replacing elements using .splice()
// // arr.splice(2, 1, 100);
// // console.log("After Replacing Elements:", arr);  
// // // Output: [10, 25, 100, 40, 50]

// // // 4️⃣ Removing all elements from a specific index
// // let allRemoved = arr.splice(2);
// // console.log("After Removing All from Index 2:", arr);  
// // // Output: [10, 25]
// // console.log("Removed Elements:", allRemoved);  
// // // Output: [100, 40, 50]

// // // 5️⃣ Using splice() on an empty array (No effect)
// // let emptyArr = [];
// // emptyArr.splice(0, 2, "Hello");
// // console.log("Splice on Empty Array:", emptyArr);  
// // // Output: ['Hello']

// // // 6️⃣ Using splice() in a loop to remove even numbers
// // let numbers = [11, 22, 33, 44, 55];
// // for (let i = numbers.length - 1; i >= 0; i--) {
// //     if (numbers[i] % 2 === 0) {
// //         numbers.splice(i, 1);
// //     }
// // }
// // console.log("After Removing Even Numbers:", numbers);  
// // // Output: [11, 33, 55]


// let value=[1,2,3,4,5];
// value.splice(2,1);//delete
// console.log(value);


