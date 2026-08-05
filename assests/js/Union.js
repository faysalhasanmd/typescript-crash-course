"use strict";
const id1 = "g-123";
function printId(id) {
    console.log(`ID: ${id}`);
}
printId(1452);
function calculateArea(shape) {
    if ("radius" in shape) {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        return shape.width * shape.height;
    }
}
console.log(calculateArea({ width: 10, height: 5 }));
console.log(calculateArea({ radius: 5 }));
