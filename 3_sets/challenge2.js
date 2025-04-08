//Guesses For Winning Number
const guesses = [848, 278, 604, 530, 323, 861, 614, 735, 199, 734];

//Winning Number
const winningNumber = 323;

function isThereAWinner() {
  return new Set(guesses).has(winningNumber);
}
const winner = isThereAWinner();
console.log(winner); // true
