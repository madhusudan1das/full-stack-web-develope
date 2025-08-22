let student={
    name:"madhusudan",
    age:21,
    class:"12th",
}
for(let a of "student"){
    console.log(a);
    
}


for (let [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
}
