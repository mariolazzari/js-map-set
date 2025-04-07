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
