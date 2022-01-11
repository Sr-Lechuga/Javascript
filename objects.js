var myCar = {
    brand: "Chevrolet",
    model: "Prisma",
    year: 2019,
    carDetail: function() {
        console.log(`Car ${this.model} ${this.year}`);
    }
};

myCar.carDetail(); //This is the way to call, like a normal function
//Not as a propperty...

//Constructor function
function car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var newCar = new car("Tesla","Model 3", 2021);
//This is how to create a new car

var newCar_2 = new car("Tesla","Model X", 2018);
var newCar_3 = new car("Toyota","Corola", 2020);