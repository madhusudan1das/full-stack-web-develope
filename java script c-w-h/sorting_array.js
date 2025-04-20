// let array=[124,44,33,17,26,555];
// array.sort();
// console.log(array) //sorting array



// let compare =(a,b)=>{
//  return a-b;
// }

// let array=[23,43,56,12,32,123,78,1,4];
// array.sort(compare);
// console.log(array);          /// sort array in sequential


// let array =[3,32,2,12,32,12,1,7,5];
// array.reverse();
// console.log(array);    // reverse print the value


//splice  and slice
// let array=[2,3,4,32,12,13,43,31];
// array.splice(0,1,222,33,44,545,333,234);    // 0 and 1 is the index where add the value
// console.log(array);



let array=[2,3,4,32,12,13,43,31];
let deleteValue=array.splice(0,1,222,33,44,545,333,234);    // it print which value is delete
console.log(deleteValue);
