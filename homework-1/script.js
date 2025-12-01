// ___________________ Задание 1 ___________________

// let male = true;
// let gender;
// if (male) {
//   gender = "man";
// } else {
//   gender = "woman";
// }

// let male = true;
// let gender = male ? "man" : "woman";

// __________________________________________________

// ___________________ Задание 2 ___________________

// let count = 0;

// for (let i = 0; count < 5; i += 2) {
//   let input = prompt("Введите число:");

//   if (input === null) {
//     console.log(`Итерация ${count + 1} (i=${i}): Пользователь отменил ввод`);
//   } else {
//     let num = Number(input);

//     if (isNaN(num)) {
//       console.log(`Итерация ${count + 1} (i=${i}): Введено не число`);
//     } else if (num === 10) {
//       console.log(`Итерация ${count + 1} (i=${i}): Равно 10`);
//     } else {
//       console.log(`Итерация ${count + 1} (i=${i}): Не равно 10`);
//     }
//   }

//   count++;
// }
// __________________________________________________

// ___________________ Задание 3 ___________________

// let input = prompt("Введите число до 100:");

// if (input === null) {
//   console.log("Пользователь отменил ввод");
// } else {
//   let num = Number(input);

//   if (isNaN(num)) {
//     console.log("Введено не число");
//   } else if (num < 0 || num > 100) {
//     console.log("Число должно быть в диапазоне от 0 до 100");
//   } else {
//     let squares = [];
//     for (let i = 0; i <= num; i++) {
//       squares.push(i * i);
//     }
//     console.log("Квадраты чисел от 0 до", num, ":", squares.join(" "));
//   }
// }
// __________________________________________________

// ___________________ Задание 4 ___________________

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// __________________________________________________

// ___________________ Задание 5 ___________________

// let i = 0;

// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// __________________________________________________

// ___________________ Задание 6 ___________________

// function printSquares(start, end) {
//   if (typeof start !== "number" || typeof end !== "number") {
//     console.log("Аргументы должны быть числами");
//     return;
//   }

//   if (start > end) {
//     console.log("Начало диапазона должно быть меньше или равно концу");
//     return;
//   }

//   if (start < 0 || end > 100) {
//     console.log("Диапазон должен быть от 0 до 100");
//     return;
//   }

//   let squares = [];
//   for (let i = start; i <= end; i++) {
//     squares.push(i * i);
//   }

//   console.log(`Квадраты чисел от ${start} до ${end}:`, squares.join(" "));
// }

// printSquares(start, end);

// __________________________________________________

// ___________________ Задание 7 ___________________

function printNumbersInfo(n) {
  if (typeof n !== "number") {
    console.log("Аргумент должен быть числом");
    return;
  }

  let squares = [];
  for (let i = 0; i <= n; i += 0.5) {
    if (Number.isInteger(i)) {
      console.log(i + " integer");
    } else {
      console.log(i + " decimal");
    }
  }
}

printNumbersInfo(160);

// __________________________________________________
