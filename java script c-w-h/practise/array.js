let array=[34,54,67,87,23,45,67,89,90,12,34,56,78,90];
let sum=0;
for(let i=0;i<array.length;i++){
    sum+=array[i];
}
console.log("Sum of all elements in the array is: "+sum);
let avg=sum/array.length;
console.log("Average of all elements in the array is: "+avg);

let max=array[0];
for(let i=1;i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }
}
console.log("Maximum element in the array is: "+max);


let min=array[0];
for(let i=1;i<array.length;i++){
    if(array[i]<min){
        min=array[i];
    }
}
console.log("Minimum element in the array is: "+min);

let count=0;
for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        count++;
    }
}
console.log("Number of even elements in the array is: "+count);