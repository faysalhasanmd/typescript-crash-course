"use strict";
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
async function get(apiEndpoints) {
    const data = await fetch(apiEndpoints);
    return data.json();
}
async function main() {
    const userInfo = await get("https://jsonplaceholder.typicode.com/users");
    const orderInfo = await get("https://jsonplaceholder.typicode.com/posts");
    const productInfo = await get("https://jsonplaceholder.typicode.com/comments");
    console.log(userInfo[0]);
    console.log(orderInfo[0]);
    console.log(productInfo[0]);
}
main();
