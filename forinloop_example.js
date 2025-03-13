const student={
    name:"madhusudan",
    age:21,
    class:"3rd year",
    marks:8.0,
    isPass:true,
};
for (let key in student) {
    // console.log(student["marks"])
    console.log(key, ":", student[key]);
}

