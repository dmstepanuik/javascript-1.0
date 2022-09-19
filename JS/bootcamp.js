// function findLongestWord(string) {
//   // Change code below this line
//   let sentence = string.split(" ");
//   let longestWord = sentence[0];
//   for (let i = 1; i < sentence.length; i += 1) {
//     if (longestWord.length < sentence[i].length) {
//       longestWord = sentence[i];
//     }
//   }
//   return longestWord;
//   // Change code above this line
// }

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
// console.log(123);

// // задача 13/41

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// задача 17/41
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors) {
  console.log(color["hex"]);
  const value = Object.values(color);

  hexColors.push(color[0]);
  rgbColors.push(color[1]);
}
