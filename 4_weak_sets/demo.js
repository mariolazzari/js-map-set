const weakSet = new WeakSet();

const obj1 = { name: "John" };
const obj2 = { name: "Jane" };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true
console.log(weakSet.has({ name: "John" })); // false
console.log(weakSet.has({ name: "Jane" })); // false
console.log(weakSet.size); // undefined

weakSet.delete(obj1); // remove obj1 from weak set
console.log(weakSet.has(obj1)); // false
console.log(weakSet.has(obj2)); // true
console.log(weakSet.size); // undefined
