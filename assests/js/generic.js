"use strict";
const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];
const booleanValues = [true, false, true];
function logItems(items) {
    return items[2];
}
const firstFruit = logItems(fruits);
const firstNumber = logItems(numbers);
const firstBoolean = logItems(booleanValues);
console.log(firstFruit); // Output: 'apple'
console.log(firstNumber); // Output: 1
console.log(firstBoolean); // Output: true
