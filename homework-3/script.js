// ___________________ Задание 1 ____________________

// const products = [
//   {
//     id: 1,
//     name: "Ноутбук",
//     price: 1200,
//     category: "electronics",
//     inStock: true,
//   },
//   { id: 2, name: "Стул", price: 150, category: "furniture", inStock: false },
//   { id: 3, name: "Книга", price: 20, category: "books", inStock: true },
//   {
//     id: 4,
//     name: "Наушники",
//     price: 80,
//     category: "electronics",
//     inStock: true,
//   },
//   { id: 5, name: "Стол", price: 300, category: "furniture", inStock: true },
// ];

// console.log("Исходный массив:");
// console.log(products);

// // const inStockProducts = [];

// // for (let value of products) {
// //   if (value.inStock === true) {
// //     inStockProducts.push(value);
// //   }
// // }

// const inStockProducts = products.filter((product) => product.inStock === true);
// console.log("Значения, у которых inStock = true:");
// console.log(inStockProducts);

// // const inStockProductsName = [];

// // for (let value of inStockProducts) {
// //   inStockProductsName.push(value.name);
// // }
// const inStockProductsName = inStockProducts.map((product) => product.name);
// console.log("Массив из названий:");
// console.log(inStockProductsName);

// // let sumInStockProducts = 0;

// // products.forEach((item) => {
// //   if (item.inStock) {
// //     sumInStockProducts += item.price;
// //   }
// // });

// const sumInStockProducts = products
//   .filter((item) => item.inStock)
//   .reduce((sum, item) => sum + item.price, 0);

// console.log("Сумма цен у inStock = true:");
// console.log(sumInStockProducts);

// const firstInCategory = products.find((item) => item.category === "furniture");
// console.log("Первая фурнитура в категориях:");
// console.log(firstInCategory);

// const expensiveGoods = [];

// for (let value of products) {
//   if (value.price > 1000) {
//     expensiveGoods.push(value);
//   }
// }

// const expensiveGoods1 = products.find((item) => item.price > 1000);
// const expensiveGoods2 = products.some((item) => item.price > 1000);

// console.log("Товары с ценой > 1000:");
// console.log(expensiveGoods);
// console.log(expensiveGoods1);
// console.log(expensiveGoods2);

// const products2 = products.slice();
// // const products2 = [];

// // for (let i = 0; i < products.length; i++) {
// //   products2.push(products[i]);
// // }
// products2.sort((a, b) => a.price - b.price);
// // for (let value of products) {
// //   products2.push(value);
// // }
// // products2.sort((a, b) => a.price - b.price);
// console.log("Отсортированный массив по цене от меньшей к большей:");
// console.log(products2);

// __________________________________________________

// ___________________ Задание 2 ____________________

// const students = [
//   { name: "Алексей", score: 85 },
//   { name: "Мария", score: 92 },
//   { name: "Иван", score: 78 },
//   { name: "Ольга", score: 92 },
//   { name: "Сергей", score: 65 },
// ];

// const studentsSort = [];
// let student = students.filter((item) => item.score >= 75);
// studentsSort.push(student);
// console.log("Выбраны студенты с оценкой больше или равно 75:");
// console.log(studentsSort);

// const GPA =
//   students.reduce((sum, student) => sum + student.score, 0) / students.length;
// console.log("Средний балл:");
// console.log(GPA);

// const studentNeudCount = students.filter((item) => item.score < 75).length;
// console.log("Не сдали тест:");
// console.log(studentNeudCount);

// const students2 = [];

// for (let i = 0; i < students.length; i++) {
//   students2.push(students[i]);
// }

// students2.sort((a, b) => {
//   if (b.score !== a.score) {
//     return b.score - a.score;
//   }
//   return b.name.localeCompare(a.name);
// });

// console.log("Сортировка от большего к меньшему и по имени при равных бвллвх:");
// console.log(students2);

// __________________________________________________

// ___________________ Задание 3 ____________________

// const point = [10, -5, 21];

// let [firstNum, secondNum, thirdNum] = point;

// console.log(firstNum);
// console.log(secondNum);
// console.log(thirdNum);
// __________________________________________________

// ___________________ Задание 4 ____________________

// const user = {
//   firstName: "Анна",
//   lastName: "Иванова",
//   age: 28,
//   contact: {
//     email: "anna@example.com",
//     phone: "+375291234567",
//   },
// };

// const {
//   firstName,
//   lastName,
//   contact: { email },
//   city = "Ваш любимый город",
// } = user;

// console.log(user);
// console.log(firstName);
// console.log(lastName);
// console.log(email);
// console.log(city);
// __________________________________________________

// ___________________ Задание 5 ____________________

// const users = [
//   { id: 1, profile: { name: "Алиса", address: { city: "Москва" } } },
//   { id: 2, profile: { name: "Боб" } }, // Нет адреса
//   { id: 3 }, // Нет профиля
//   {
//     id: 4,
//     profile: {
//       name: "Давид",
//       address: { city: "Казань", street: "Центральная" },
//     },
//   },
// ];

// users.forEach((user) => {
//   const city = user.profile?.address?.city || "Город не указан";
//   console.log(`ID ${user.id}. Город: ${city}`);
// });

// __________________________________________________
