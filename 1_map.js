// Maps are a collection of key-value pairs
const saturday = new Map();

// The set method is used to add a new key-value pair to the map
saturday.set(8, "Walk the dog");
saturday.set(12, "Lunch");
saturday.set(3, "Wathch a movie");

console.log(saturday);

// The get method is used to retrieve the value associated with a key
const noon = saturday.get(12);
console.log(`At noon: ${noon}`);

const nine = saturday.get(9);
console.log(`At 9:00: ${nine}`);

// The has method is used to check if a key exists in the map
const has4 = saturday.has(4);
console.log(`Has 4? ${has4}`);

const has8 = saturday.has(8);
console.log(`Has 8? ${has8}`);

// map size
const saturdaySize = saturday.size;
console.log(`Map size: ${saturdaySize}`);

// The delete method is used to remove a key-value pair from the map
let isDeleted = saturday.delete(3); // true
console.log(`Deleted 3? ${isDeleted}`); // true
isDeleted = saturday.delete(33); // false
console.log(`Deleted 33? ${isDeleted}`); // false

// The clear method is used to remove all key-value pairs from the map
saturday.clear(); // remove all key-value pairs
console.log(`Map size: ${saturday.size}`); // 0

// restore values
saturday.set(8, "Walk the dog");
saturday.set(12, "Lunch");
saturday.set(3, "Wathch a movie");

// keys and values
const keys = saturday.keys();
const firstKey = keys.next();
console.log(`First key: ${firstKey}`); // 8

console.log("Keys:");
for (const key of keys) {
  console.log(key);
}

const values = saturday.values();
values.next();

const secondValue = values.next().value;
console.log(`Second value: ${secondValue}`); // Lunch

console.log("Values:");
for (const value of values) {
  console.log(value);
}

// entries
const entries = saturday.entries();
console.log("entries:", entries);

entries.next();
entries.next();
const thirdEntry = entries.next().value;
console.log(`Third entry: ${thirdEntry}`); // [3, 'Wathch a movie']
