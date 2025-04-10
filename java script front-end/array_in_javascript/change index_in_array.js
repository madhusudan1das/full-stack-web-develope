// let price=[90,80,75,109,190,145];
// let i=0;
// let discount=10;
// for(let val of price){
// let offer=val/discount;
// price[i]=price[i]-offer;
// console.log(price[i]);
// i++;
// }


let price = [90, 80, 75, 109, 190, 145];
let discount = 10;
let sum=0;

for (let i = 0; i < price.length; i++) { // ✅ Use 'i' in loop
    let offer = price[i] / discount; 
    price[i] = price[i] - offer; // ✅ Correct discount application
    sum=sum+price[i];
}

console.log(price); // ✅ Prints updated array
console.log(sum);