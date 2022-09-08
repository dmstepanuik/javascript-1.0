function findLongestWord(string) {
  // Change code below this line
  let sentence = string.split(" ");
  let longestWord = sentence[0];
  for (let i = 1; i < sentence.length; i += 1) {
    if (longestWord.length < sentence[i].length) {
      longestWord = sentence[i];
    }
  }
  return longestWord;
  // Change code above this line
}

const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;
