var items = [
    {name: "Bicycle", cost: 300},
    {name: "Television", cost: 400},
    {name: "Book", cost: 10},
    {name: "Cellphone", cost: 800},
    {name: "Laptop", cost: 1400},
    {name: "Keyboard", cost: 30},
    {name: "Headphones", cost: 100}
];

//Filter
var filteredItems = items.filter(function (item) {
    return item.cost <= 50
});
/*Returns a filtered array by the conditions in the function*/

//Mapping
var itemName = items.map(function (item) {
    return item.name
});
/*Returns a filtered array with the name of articles*/

//Finding
var itemFound = items.find(function (item) {
    return item.name === "Laptop";
});
/*Returns an array with the item found, if exist */

//For each
items.forEach(function (item) {
   console.log(item.name); 
});
/*Return a list of names of the items in the array*/

//Some
var cheapItems = items.some(function (item) {
   return item.cost <= 100; 
});
/*Returns if there are items that accomplish the condition or not (T/F) */