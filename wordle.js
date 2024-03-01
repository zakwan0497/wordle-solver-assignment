// WORDLE SOLVER

// 1. DECLARE ARRAY
// get list of all 5 letter words from words.js file
const allWords = require('./words');

// has these letters
const hasLetters = ['h','o','u','g','d']; 

// must not has these letters
const mustNotHaveLetters = ['a','y','e','v','c','l','t','r'];

// must have selected letters in these positions
const mustHaveLettersInPosition = ['d','o','u','g','h'];

// not in these positions
const mustNotHaveLettersInPosition = ['h',,'o',,];


// 2. SET FUNCTION
const containsLetter = (word, letter) => {
  return word.includes(letter);
}

// const doesNotContainLetter = (word, letter) => {
//   return !word.includes(letter);
// }

const hasLetterInPosition = (word, letter, position) => {
  if (letter === undefined) return true;

  return word[position] === letter;
}

// 3. CONDITION
const filteredWords = allWords.filter(word => {
  return hasLetters.every(letter => containsLetter(word, letter)) &&
  mustNotHaveLetters.every(letter => !containsLetter(word, letter)) &&
  mustHaveLettersInPosition.every((letter, index) => hasLetterInPosition(word, letter, index)) &&
  mustNotHaveLettersInPosition.every((letter, index) => !hasLetterInPosition(word, letter, index))
})

console.log(filteredWords);
console.log('possible words', filteredWords.length);