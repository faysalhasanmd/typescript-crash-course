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

function calculateArea(shape: rectangle | circle): number {
  if ("radius" in shape) {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.width * shape.height;
  }
}
console.log(calculateArea({ width: 10, height: 5 }));
console.log(calculateArea({ radius: 5 }));
