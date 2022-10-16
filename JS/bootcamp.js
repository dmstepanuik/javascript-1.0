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

// function hello() {
//   console.log("Hello", this);
// }

// const person = {
//   name: "Dmytro",
//   age: 39,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(document),
//   logInfo: function (job, phone) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);
//     console.groupEnd();
//   },
// };

// const lena = {
//   name: "Elena",
//   age: 35,
// };

// person.logInfo.bind(lena, "Fontend", "8-067-123-12-15")();
// person.logInfo.call(lena, "Fontend", "8-067-123-12-15");
// person.logInfo.apply(lena, ["Fontend", "8-067-123-12-15"]);

// //====================================
// const array = [1, 2, 3, 4, 5];

// // function mulyBy(arr, n) {
// //   return arr.map(function (i) {
// //     return i * n;
// //   });
// // }
// Array.prototype.multBy = function (n) {
//   return this.map(function (i) {
//     return i * n;
//   });
// };

// console.log(array.multBy(20));
// // console.log(mulyBy(array, 15));

// const myPromise = (delay) => new Promise((res, rej) => setTimeout(res, delay));

// const myPromise2 = (delay) => {
//   return new Promise((res, rej) => {
//     setTimeout(res, delay);
//   });
// };

// const foo = () => 5;
// const foo2 = () => {
//   return 5;
// };

// function createCulcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }

// const calc = createCulcFunction(42);
// calc();

// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }
// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(10));
// console.log(addOne(41));

// console.log(addTen(10));
// console.log(addTen(41));

// ===================

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }
// const comUrl = urlGenerator("com");
// const uaUrl = urlGenerator("ua");

// console.log(comUrl("google"));
// console.log(comUrl("ua"));

// const person = Object.create(
//   {
//     calculateAge() {
//       console.log("Age:", new Date().getFullYear() - this.birthYaer);
//     },
//   },
//   {
//     name: {
//       value: "Dmytro",
//       enumerable: true,
//       writable: true,
//       configurable: true,
//     },
//     birthYaer: {
//       value: 1983,
//       enumerable: false,
//       writable: false,
//       configurable: false,
//     },
//     age: {
//       get() {
//         return new Date().getFullYear() - this.birthYaer;
//       },
//       set(value) {
//         document.body.style.background = "red";
//         console.log("Set age", value);
//       },
//     },
//   }
// );
// // console.log(person);
// // const person = {
// //   name: "Dmytro",
// //   birthYear: 1983,
// // };
// person.name = "Dmytro";

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//   }
//   console.log("Key", key, person[key]);
// }

// const amimal = {
//   name: "Animal",
//   age: 5,
//   hasTail: true,
// };

//

// class Component {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }

//   hide() {
//     this.$el.style.display = "none";
//   }
//   show() {
//     this.$el.style.display = "block";
//   }
// }

// class box extends Component {
//   constructor(options) {
//     super(options.selector);

//     this.$el.style.width = this.$el.style.height = options.size + "px";
//     this.$el.style.background = options.color;
//   }
// }

// const box1 = new box({
//   selector: "#box1",
//   size: 100,
//   color: "red",
// });

// const box2 = new box({
//   selector: "#box2",
//   size: 120,
//   color: "blue",
// });

// class Circle extends box {
//   constructor(options) {
//     super(options);

//     this.$el.style.borderRadius = "50%";
//   }
// }

// const c = new Circle({
//   selector: "#circle",
//   size: 90,
//   color: "green",
// });

// const delay = (ms) => {
//   return new Promise((r) => setTimeout(() => r(), ms));
// };
// // delay(2000).then(() => console.log("2sec"));

// const url = "https://jsonplaceholder.typicode.com/todos/1";

// function fetchTodos() {
//   console.log("Fetch todo started...");
//   return delay(2000)
//     .then(() => {
//       return fetch(url);
//     })
//     .then((response) => response.json());
// }

// fetchTodos()
//   .then((data) => {
//     console.log("Data", data);
//   })
//   .catch((e) => console.log(e));

// async function fetchAsyncTodos() {
//   console.log("Fetch todo started...");
//   try {
//     await delay(2000);
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log("Data", data);
//   } catch (e) {
//     console.log(e);
//   } finally {
//   }
// }

// fetchAsyncTodos()

// const person = {
//   name: "Dmytro",
//   age: 39,
//   job: "Fullstack",
// };

// const op = new Proxy(person, {
//   get(target, prop) {
//     // console.log("getting prop${prop}");
//     if (!(prop in target)) {
//       return prop
//         .split("")
//         .map((p) => target[p])
//         .join(" ");
//     }
//     return target[prop];
//   },
//   set(target, prop, value) {
//     if (prop in target) {
//       target[prop] = value;
//     } else {
//       throw new Error("No $ {prop} field in target");
//     }
//   },
//   has(target, prop) {
//     return ["age", "name", "job"].includes(prop);
//   },
//   deleteProperty(target, prop) {
//     console.log("Deteting...", prop);
//     delete target[prop];
//     return true;
//   },
// });

// ////Functions
// const log = (text) => "Log: $ {text}";

// const fp = new Proxy(log, {
//   apply(target, thisArg, args) {
//     console.log("Calling fn...");

//     return target.apply(thisArg, args).toUpperCase();
//   },
// });
// ///Classes
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const PersonProxy = new Proxy(Person, {
//   construct(target, args) {
//     console.log("construct....");

//     return new Proxy(new target(...args), {
//       get(t, prop) {
//         console.log('Getting prop "${prop"');
//         return t[prop];
//       },
//     });
//   },
// });

// const p = new PersonProxy("Ivan", 30);

///wrapper

// const withDefaultValue = (target, deefaultValue = 0) => {
//   return new Proxy(target, {
//     get: (obj, prop) => (prop in obj ? obj[prop] : deefaultValue),
//   });
// };

// const position = withDefaultValue(
//   {
//     x: 24,
//     y: 42,
//   },
//   0
// );

// // console.log(position);

// // Hidden properies

// const withHiddenProps = (target, prefix = "_") => {
//   return new Proxy(target, {
//     has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
//     ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
//     get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
//   });
// };

// const data = withHiddenProps({
//   name: "Ivan",
//   age: 38,
//   _uid: "21235",
// });

// optimization

// const IndexArray = new Proxy(Array, {
//   construct(target, [args]) {
//     const index = {};
//     args.forEach((item) => (index[item.id] = item));

//     return new Proxy(new target(...args), {
//       get(arr, prop) {
//         switch (prop) {
//           case "push":
//             return (item) => {
//               index[item.id] = item;
//               arr[prop].call(arr, item);
//             };
//           case "findById":
//             return (id) => index[id];
//           default:
//             return arr[prop];
//         }
//       },
//     });
//   },
// });

// const users = new IndexArray([
//   { id: 11, name: "Ivan", job: "Fullstack", age: 31 },
//   { id: 22, name: "Marta", job: "Student", age: 25 },
//   { id: 33, name: "Petro", job: "Teacher", age: 42 },
//   { id: 44, name: "Dmytro", job: "Backend", age: 31 },
// ]);

// function* strGenerator() {
//   yield "H";
//   yield "e";
//   yield "l";
//   yield "l";
//   yield "o";
// }
// const str = strGenerator();
//

// function* iter(n = 10) {
//   for (let i = 0; i < n; i++) {
//     yield i;
//   }
// }

// for (let k of iter(6)) {
//   console.log(k);
// }
// const people = [
//   { name: "Igor", age: 25, budget: 4000 },
//   { name: "Mary", age: 17, budget: 3700 },
//   { name: "Ann", age: 23, budget: 5000 },
//   { name: "john", age: 15, budget: 8000 },
//   { name: "Bill", age: 27, budget: 5500 },
//   { name: "Kate", age: 29, budget: 6700 },
// ];
// forEach
// for (let i = 0; i < people.length; i += 1) console.log(people[i]);

// for (let person of people) {
//   console.log(person);
// }

// people.forEach(function (person) {
//   console.log(person);

// });
// people.forEach((person) => console.log(person));

// map

// const newPeople = people.map((person) => person.age * 3);
// console.log(newPeople);

// Filter
// const adults = [];
// for (let i = 0; i < people.length; i += 1) {
//   if (people[i].age >= 18) {
//     adults.push(people[i]);
//   }
// }
// console.log(adults);
// const adults = people.filter((person) => person.age >= 18);

// console.log(adults);

// Reduce
// let amount = 0;
// for (let i = 0; i < people.length; i += 1) {
//   amount += people[i].budget;
// }
// console.log(amount);

// const amount = people.reduce((total, person) => total + person.budget, 0);
// console.log(amount);

// Find
// const Igor = people.find((person) => person.name === "Igor");
// console.log(Igor);

// FindIndex
// const IgorIndex = people.findIndex((person) => person.name === "Igor");
// console.log(IgorIndex);

// ============

// const amount = people
//   .filter(person => person.budget > 5000)
//   .map(person => {
//     return {
//       info: `${person.name} (${person.age})`,
//       budget: person.budget,
//     };
//   });
// .reduce((total, person) => total + person.budget, 0);
// console.log(amount);
// const obj = {
//   name: "Dmytro",
//   age: 39,
//   job: "Fullstack",
// };

// const entries = [
//   ["name", "Dmytro"],
//   ["age", 39],
//   ["job", "Fullstack"],
// ];

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

// const map = new Map(entries);

// // console.log(obj.job);
// // console.log(map.get("job"));
// map.set("newField", 42);
// map.set(obj, "Value of object");
// map.set(NaN, "NaN ??");

// console.log(map.get(NaN));
// map.delete("job");
// console.log(map.has("job"));
// console.log(map.size);
// map.clear();
// console.log(map.size);

// for (let [key, value] of map) {
//   console.log(key, value);
// }

// for (let val of map.values()) {
//   console.log(val);
// }

// map.forEach((val, key, m) => {
//   console, log(val, key, m);
// });

// ====================================

// const array = [...map];

// console.log(array);

// const array = Array.from(map);

// const mapObj = Object.fromEntries(map.entries());
// console.log(array);
// ==============================

// const users = [{ name: "Elena" }, { name: "Alex" }, { name: "Irina" }];

// const visits = new Map();

// visits.set(users[0], new Date());
// visits.set(users[1], new Date(new Date().getTime() + 3000 * 60));
// visits.set(users[2], new Date(new Date().getTime() + 6000 * 60));

// function lastVisit(user) {
//   return visits.get(user);
// }
// console.log(lastVisit(users[2]));

// const set = new Set([1, 2, 3, 4, 5, 5, 6]);

// set.add(10).add(20).add(30).add(20);
// console.log(set);
// console.log(set.has(30));
// console.log(set.has(42));
// console.log(set.size);

// for (let key of set) {
//   console.log(key);
// }
// =====================

// function uniqValues(array) {
//   return Array.from(new Set(array));
// }
// console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 5, 6]));
// =============================

// let obj = { name: "weakmap" };
// const arr = [obj];
// obj = null;
// console.log(arr[0]);

// const map = new WeakMap([[obj, "obj data"]]);

// obj = null;

// console.log(map);

// // ======================

// const cache = new WeakMap();

// function cachUser(user) {
//   if (!cache.has(user)) {
//     cache.set(user, Date.now());
//   }
//   return cache.get(user);
// }
// let lena = { name: "Elena" };
// let alex = { name: "Alex" };

// cachUser(lena);
// cachUser(alex);

// console.log(cache.has(lena));
// console.log(cache.has(alex));

// const users = [{ name: "Elena" }, { name: "Alex" }, { name: "Dmytro" }];
// const visits = new WeakSet();
// visits.add(users[0]).add(users[1]);

// users.splice(1, 1);

// console.log(visits.has(users[0]));
// console.log(visits.has(users[1]));

// const requestUrl = "https://jsonplaceholder.typicode.com/users";

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "requestURL");
// xhr.responseType = "json";
// xhr.onload = () => {
//   console.log(xhr.respnse);
// };
// xhr.onerror = () => {};

// // xhr.send();
// const citiesUkraine = ["Kharkov", "Kiev", "Dnepr", "Lvov"];
// const cictiesEurope = ["Berlin", "Prague", "Paris"];
// const cititesUkraineWithPopulation = {
//   Kharkov: 3,
//   Kiev: 5,
//   Dnepr: 2,
//   Lvov: 1,
// };
// const cictiesEuropePopulation = {
//   Berlin: 10,
//   Prague: 5,
//   Paris: 7,
// };

// console.log(...citiesUkraine);
// console.log(...cictiesEurope);
// const allCities = [...cictiesEurope,  ...citiesUkraine];
// const allCities = cictiesEurope.concat(citiesUkraine);
// console.log(allCities);
// console.log({ ...cititesUkraineWithPopulation });

// console.log({ ...cititesUkraineWithPopulation, ...cictiesEuropePopulation });
// console.log({ ...cictiesEuropePopulation, ...cititesUkraineWithPopulation });

// const numbers = [5, 37, 42, 54];
// console.log(Math.max(5, 37, 42, 54));
// console.log(Math.max(...numbers));
// console.log(Math.max.apply(null, numbers));

// const divs = document.querySelector("div");
// console.log(divs);

// rest

// function sum(a, b, ...rest) {
// return a + b + rest.reduce((a, i) => a + i, 0);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(sum(...numbers));

// const a = numbers[0];
// const b = numbers[1];
// const [a, b] = numbers;

// const person = {
//   name: "Max",
//   age: 20,
//   city: "Kharkov",
//   country: "Ukraine",
// };

// const { name, age, ...adress } = person;
// console.log(name, age, adress);

// function calcValues(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }
// const [sum, , mult, ...other] = calcValues(42, 10);
// // const sum = result[0];
// // const sub = result[1];
// // const [sum, sub] = result;

// console.log(sum, mult, other);

// const person = {
//   name: "Dmytro",
//   age: 20,
//   address: {
//     country: "Ukraine",
//     city: "Kharkov",
//   },
// };
// // const {
// //   name: firstName = "Без имени",
// //   age,
// //   car = "Машины нет",
// //   address: { city: homeTown, country },
// // } = person;

// // const { name, ...info } = person;
// // console.log(name, info);

// function logPerson({ name: firstName = "111", age }) {
//   console.log(firstName + " " + age);
// }
// logPerson(person);
// const myNumber = 42;

// console.log(localStorage.getItem("number"));

// localStorage.setItem("number", myNumber.toString());
// console.log(localStorage.getItem("number"));

const object = {
  name: "Dmytro",
  age: 35,
};
const raw = localStorage.getItem("person");
const person = JSON.parse(raw);
person.name = "Nick";

console.log(person);
