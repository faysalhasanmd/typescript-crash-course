type user = {
  name: string;
  age: number;
  isAdmin: boolean;
};

type Order = {
  orderId: number;
  product: string;
  quantity: number;
};

type product = {
  productId: number;
  productName: string;
  price: number;
};

// async function getUserInfo(): Promise<user[]> {
//     const data = await fetch('https://api.example.com/user');
//     return data.json();
// }
// async function getOrderInfo (): Promise<Order[]> {
//     const data = await fetch(`https://api.example.com/orders`);
//     return data.json();
// }
// async function getProductInfo(): Promise<product[]> {
//     const data = await fetch(`https://api.example.com/products/`);
//     return data.json();
// }

async function get<T>(apiEndpoints: string): Promise<T[]> {
  const data = await fetch(apiEndpoints);
  return data.json();
}

async function main() {
  const userInfo = await get<user>(
    "https://jsonplaceholder.typicode.com/users",
  );
  const orderInfo = await get<Order>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const productInfo = await get<product>(
    "https://jsonplaceholder.typicode.com/comments",
  );

  console.log(userInfo[0]);
  console.log(orderInfo[0]);
  console.log(productInfo[0]);
}

main();
