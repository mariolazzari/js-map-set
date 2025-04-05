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
