// let person = {
//   name: "Madhusudan",
//   age: 21,
//   birthDate: "15/02/2004",
//   isStudent: true,
//   gret: function () {
//     console.log("Hello, my name is " + this.name);
//   }
// };

// console.log(person);
// person.gret();                                // simple object crerate




let car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2022;
car.best_company= function (){
    console.log("the car company name is"+ this.brand);
    
}
car.best_company();


