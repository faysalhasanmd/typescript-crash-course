type point = [number, number];
const tangailLocation: point = [10, 20];
const tangailLocation2: point = [10.25, 20.14];
// console.log(tangailLocation2[1]);

type player = [string, string, number];
const player1: player = ["neymar", "brazil", 10];
const player2: player = ["ronaldo", "portugal", 7];
// console.log(player1[0]);

type orderItem = readonly [number, number];
const order1: orderItem = [10, 20];
// order1.push(30); // This would cause an error since the tuple is readonly
console.log(order1);

type Division = [number, number];
function div(a: number, b: number): number[] {
  const div = Math.floor(a / b);
  const remainder = a % b;
  return [div, remainder];
}
const result = div(10, 3);
console.log(`Division: ${result[0]}, Remainder: ${result[1]}`);
