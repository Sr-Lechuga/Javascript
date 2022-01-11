//Variables
function car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}
var model = 100;
var year = 1990;
var cars = [];

for (var count = 0; count < 30; count++) {
    var newCar = new car("Ultreia",model,year);
    cars.push(newCar);
    model++;
    year++;
}

cars.forEach(element => {
    console.log(`Car: ${element.brand} ${element.model} ${element.year}`)
});

console.log(cars.length);

