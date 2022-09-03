// Перепишіть конструкцію if за допомогою умовного оператора '?':

// const a = 1;
// const b = 2;
// let result;

// if (a + b < 4) {
//   result = "Many";
// } else {
//   result = "Much";
// }
// result = a + b < 4 ? "Many" : "Much";

// console.log(result);

// Натуральне число більше 1 називається простим, якщо воно ні на що не ділиться, крім себе і 1.
//
// Інакше кажучи, n > 1 – просте, якщо його розподілі на будь-яке число крім 1 і є залишок.
//
//   Наприклад, 5 це просте число, воно не може бути розділене без залишку на 2, 3 та 4.
//
// Напишіть код, який виводить усі прості числа з інтервалу від 2 до n.
//
//   Для n = 10 результат має бути 2,3,5,7.
//
// P.S. Код також має бути легко модифікований для будь-яких інших інтервал

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const values = Object.values(salaries);
  // Change code above this line
  for (const value of values) {
    totalSalary += value;
  }

  console.log(total);

  return totalSalary;
}
