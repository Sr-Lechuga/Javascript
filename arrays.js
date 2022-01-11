var fruits = ["Apple", "Banana", "Cherry", "Strawberry"];

console.log(fruits);

console.log(fruits.length); // Array length

console.log(fruits[0]); // Return Apple
console.log(fruits[2]); // Return Cherry

//Arrys start at index 0

var moreFruits = fruits.push("Grapes"); //Add grapes at the end of the array

var last = fruits.pop("Grapes"); //Pops out grapes from array

var newLength = fruits.unshift("Grapes"); //Add grapes at the beggining of the array

var deleteFruit = fruits.shift("Grapes"); //Delete grapes at the start

var position = fruits.indexOf("Cherry"); // Return the position of specific element by name

