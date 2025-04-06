function allUsersInfo() {
  const users = ["Alice", "Bob", "Charlie", "David", "Eve"];
  for (const user of users) {
    if (allUsers.has(user)) {
      return true;
    }
  }
  return false;
}

const allUsers = new Map();
allUsers.set("Alice", 25);
allUsers.set("Bob", 23);
allUsers.set("Charlie", 21);
allUsers.set("David", 23);
allUsers.set("Eve", 25);

const result = allUsersInfo();
console.log(result);
