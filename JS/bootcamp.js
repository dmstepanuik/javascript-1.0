// // function findLongestWord(string) {
// //   // Change code below this line
// //   let sentence = string.split(" ");
// //   let longestWord = sentence[0];
// //   for (let i = 1; i < sentence.length; i += 1) {
// //     if (longestWord.length < sentence[i].length) {
// //       longestWord = sentence[i];
// //     }
// //   }
// //   return longestWord;
// //   // Change code above this line
// // }

// // const a = 3 % 1;
// // const b = 4 % 3;
// // const c = 11 % 8;
// // const d = 12 % 7;
// // const e = 8 % 6;
// // console.log(123);

// // // задача 13/41

// // const apartment = {
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
// //   price: 2153,
// // };
// // const values = [];
// // // Change code below this line
// // const keys = Object.keys(apartment);
// // for (const key of keys) {
// //   values.push(apartment[key]);
// // }
// // console.log(values);

// // задача 17/41
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   console.log(color["hex"]);
//   const value = Object.values(color);

//   hexColors.push(color[0]);
//   rgbColors.push(color[1]);
// }

// setTimeout(function timeout() {
//   console.log("Таймаут");
// }, 0);

// let p = new Promise(function (resolve, reject) {
//   console.log("Создание промиса");
//   resolve();
// });

// p.then(function () {
//   console.log("Обработка промиса");
// });

// console.log("Конец скрипта");

// console.log("Request data..");

// setTimeout(() => {
//   console.log("Preparing data...");

//   const backendData = {
//     server: "aws",
//     port: 2000,
//     status: "working",
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log("Data received", backendData);
//   }, 2000);
// }, 2000);

// const p = Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Preparing data...");
//     const backendData = {
//       server: "aws",
//       port: 2000,
//       status: "working",
//     };
//     resolve(backendData);
//   }, 2000);
// });

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       reject(data);
//     }, 2000);
//   });
// })
//   .then((clientData) => {
//     clientData.fromPromice = true;
//     return clientData;
//   })
//   .then((data) => {
//     console.log("Modified", data);
//   })
//   .catch((err) => console.error("Error", err))
//   .finally(() => console.log("Finally"));

// const sleep = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), ms);
//   });
// };
// sleep(5000).then(() => console.log("After 5 seconds"));
// sleep(7000).then(() => console.log("After 7 seconds"));

// Promise.all([sleep(5000), sleep(7000)]).them(() => {
//   console.log("All promises");
// });

// Promise.race([sleep(5000), sleep(7000)]).them(() => {
//   console.log("Race promises");
// });

// const person = Object.create(
//   {
//     calculateAge() {
//       console.log("Age", new Date().getFullYear() - this.birthYear);
//     },
//   },
//   {
//     name: {
//       value: "Dmytro",
//       enumerable: true,
//       writable: true,
//       configurable: true,
//     },
//     birthYear: {
//       value: 1983,
//       enumerable: false,
//       writable: false,
//       configurable: true,
//     },
//     age: {
//       get() {
//         return new Date().getFullYear() - this.birthYear;
//       },
//       set(value) {
//         console.log("Set age", value);
//       },
//     },
//   }
// );

// // const person = {
// //   name: "Dmytro",
// //   bithYear: 1983,
// // };

// // person.name = "Maxim";

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log("Key".key, person[key]);
//   }
// }

// const person = new Object({
//   name: "Maxim",
//   age: 25,
//   greet: function () {
//     console.log("Greete!");
//   },
// });

// Object.prototype.sayHello = function () {
//   console.log("Hello!");
// };

// const lena = Object.create(person);
// lena.name = "Elena";

// const str = "I am string";

function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Dmytro",
  age: 39,
  sayHello: hello,
  sayHelloWindow: hello.bind(),
};
