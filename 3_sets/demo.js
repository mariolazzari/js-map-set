// Set definition
const iceCreams = new Set();
// add elementa
iceCreams
  .add("Vanilla")
  .add("Chocolate")
  .add("Strawberry")
  .add("Mint")
  .add("Pistachio")
  .add("Vanilla")
  .add("Coffee")
  .add("Coffee");

console.log("Ice creams:", iceCreams);

// has
const hasMintChocChip = iceCreams.has("mint choccolate chip");
console.log("Has mint choccolate chip?", hasMintChocChip);

const hasCoffee = iceCreams.has("Coffee");
console.log("Has coffee?", hasCoffee);

// size
const iceCreamsSize = iceCreams.size;
console.log("Ice creams size:", iceCreamsSize);

// delete vanilla
iceCreams.delete("Vanilla");
console.log("Ice creams after deleting vanilla:", iceCreams);
console.log("Ice creams size after deleting vanilla:", iceCreams.size);

// clear
iceCreams.clear();
console.log("Ice creams after clearing:", iceCreams);
console.log("Ice creams size after clearing:", iceCreams.size);

// restore iceCrems
iceCreams
  .add("Vanilla")
  .add("Chocolate")
  .add("Strawberry")
  .add("Mint")
  .add("Pistachio")
  .add("Coffee");

// values
const iceCreamsValues = iceCreams.values();
const firstValue = iceCreamsValues.next().value;
console.log("First value:", firstValue);
const secondValue = iceCreamsValues.next().value;
console.log("Second value:", secondValue);

// entries
const iceCreamsEntries = iceCreams.entries();
const firstEntry = iceCreamsEntries.next().value;
console.log("First entry:", firstEntry);
