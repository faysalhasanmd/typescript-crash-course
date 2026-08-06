const fruits: string[] = ["apple", "banana", "cherry"];
const numbers: number[] = [1, 2, 3, 4, 5];
const booleanValues: boolean[] = [true, false, true];

function logItems<T>(items: T[]): T {
  return items[2];
}

const firstFruit = logItems(fruits);
const firstNumber = logItems(numbers);
const firstBoolean = logItems(booleanValues);
console.log(firstFruit); // Output: 'apple'
console.log(firstNumber); // Output: 1
console.log(firstBoolean); // Output: true
