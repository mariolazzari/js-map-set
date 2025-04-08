const namesForFamilyPet = [
  "Dylan",
  "Spot",
  "Debbie",
  "Jill",
  "Spot",
  "Spot",
  "Meadow",
  "Debbie",
];

function createNewSet() {
  return new Set(namesForFamilyPet);
}

const set = createNewSet();
console.log(set); // Set(5) { 'Dylan', 'Spot', 'Debbie', 'Jill', 'Meadow' }
