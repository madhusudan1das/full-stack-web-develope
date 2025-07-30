
let car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2022;
car.best_company= function (){
    console.log("the car company name is"+ this.brand);
    
}
car.best_company();