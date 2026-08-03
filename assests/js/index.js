"use strict";
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10));
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 10));
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
console.log(divide(10, 5));
