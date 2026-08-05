type ID = number | string;

const id1: ID = "g-123";

function printId(id: ID) {
  console.log(`ID: ${id}`);
}
printId(1452);

type rectangle = {
  width: number;
  height: number;
};

type circle = {
  radius: number;
};

type square = {
  length: number;
};

type Shape = rectangle | circle | square;
function calculateArea(shape: Shape): number {
  if ("radius" in shape) {
    return Math.PI * shape.radius * shape.radius;
  } else if ("length" in shape) {
    return shape.length * shape.length;
  } else {
    return shape.width * shape.height;
  }
}
// console.log(calculateArea({ width: 10, height: 5 }));
// console.log(calculateArea({ radius: 5 }));
console.log(calculateArea({ length: 5 }));
