"use strict";
const tangailLocation = [10, 20];
const tangailLocation2 = [10.25, 20.14];
const player1 = ["neymar", "brazil", 10];
const player2 = ["ronaldo", "portugal", 7];
const order1 = [10, 20];
// order1.push(30); // This would cause an error since the tuple is readonly
console.log(order1);
function div(a, b) {
    const div = Math.floor(a / b);
    const remainder = a % b;
    return [div, remainder];
}
const result = div(10, 3);
console.log(`Division: ${result[0]}, Remainder: ${result[1]}`);
