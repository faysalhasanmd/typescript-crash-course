type UserNew = {
  id: number;
  name: string;
  email: string;
};

const users: UserNew[] = [];

let lastUserId: number = 0;

function addUser(name: string, email: string): UserNew {
  const user: UserNew = {
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
