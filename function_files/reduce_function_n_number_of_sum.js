// let num=[1,2,3,4,5];
// let newNum=num.reduce((previous,current)=>{
// return previous+current;
// });
// console.log(`after sum of numbers: ${newNum}`);

let num=[2,4,6,8,10,12];
let newNum=num.reduce((previous,current)=>{
return previous+current;
},0);
const avg=newNum/num.length;
console.log(`after sum of numbers: ${avg}`);