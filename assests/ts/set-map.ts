const data = new Set<string>();

data.add("faysal");
data.add("hasan ");
data.add("ibrahim");

// console.log(data);

const data2 = new Map<string, number>();

data2.set("neymar", 10);
data2.set("ronaldo", 7);
data2.set("messi", 10);

// console.log(data2);

const order = new Map<string, number>();

function addOrder(juice: string) {
  const totalOrder = (order.get(juice) ?? 0) + 1;
  order.set(juice, totalOrder);
}
addOrder("mango");
addOrder("mango");
addOrder("banana");
addOrder("banana");
addOrder("angur");

console.log(order);
