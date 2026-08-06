"use strict";
const users = [];
let lastUserId = 0;
function addUser(name, email) {
    const user = {
        id: ++lastUserId,
        name,
        email,
    };
    users.push(user);
    return user;
}
// addUser("Alice", "alice@example.com");
// addUser("Bob", "bob@example.com");
addUser("Charlie", "charlie@example.com");
console.log(users);
