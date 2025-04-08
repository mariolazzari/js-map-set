const weak = new WeakMap();
const obj = { name: 'John' };
const obj2 = { name: 'Jane' };
weak.set(obj, 'john');
weak.set(obj2, 'jane');

console.log(weak.get(obj)); // john
console.log(weak.get(obj2)); // jane
console.log(weak.has(obj)); // true
console.log(weak.has(obj2)); // true
console.log(weak.size); // undefined
weak.delete(obj); // remove obj from weak map
console.log(weak.has(obj)); // false
console.log(weak.has(obj2)); // true
console.log(weak.size); // undefined
console.log(weak.get(obj)); // undefined
console.log(weak.get(obj2)); // jane
console.log(weak); // WeakMap { <items unknown> }
