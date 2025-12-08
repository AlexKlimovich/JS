// ___________________ Задание 1 ___________________// const user = { name: "Anna", age: 25 };// const admin = user;// admin.age = 30;// console.log(user.age); // 30

// __________________________________________________

// ___________________ Задание 2 ___________________

// const obj1 = { value: 10 };
// const obj2 = { value: 10 };
// const obj3 = obj1;

// console.log(obj1 === obj2); // false
// console.log(obj1 === obj3); // true

// __________________________________________________

// ___________________ Задание 3 ___________________

// function updateConfig(config) {
//   config.theme = "dark";
//   config = { theme: "light" };
// }

// const appConfig = { theme: "blue" };
// updateConfig(appConfig);

// console.log(appConfig.theme); // dark

// __________________________________________________

// // ___________________ Задание 4 ___________________
// const product = {
//   id: 1,
//   name: "Laptop",
//   price: 1000,
//   inStock: true,
// };

// for (let key in product) {
//   console.log(key + ":", product[key]);
// }
// __________________________________________________

// // ___________________ Задание 5 ___________________

// function countProperties(obj) {
//   let count = 0;

//   for (let key in obj) {
//     count++;
//   }

//   return count;
// }

// const product = {
//   id: 1,
//   name: "Laptop",
//   price: 1000,
//   inStock: true,
// };

// console.log(countProperties(product));

// __________________________________________________

// // ___________________ Задание 6 ___________________

// const formData = {
//   username: "john_doe",
//   email: "",
//   password: "secret123",
//   age: null,
// };

// const isFilled = (obj) =>
//   Object.values(obj).every(
//     (value) => value !== "" && value !== null && value !== undefined
//   );

// console.log(isFilled(formData));

// __________________________________________________

// // ___________________ Задание 7 ___________________

// function mergeObjects(obj1, obj2) {
//   return Object.assign({}, obj1, obj2);
// }
// function mergeObjects(obj1, obj2) {
//   const res = {};

//   for (let key in obj1) {
//     const value = obj1[key];
//     res[key] = value;
//   }

//   for (let key in obj2) {
//     const value = obj2[key];
//     res[key] = value;
//   }

//   return res;
// }

// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };

// console.log(mergeObjects(target, source));
// Ожидаемый результат: { a: 1, b: 3, c: 4 }
// __________________________________________________

// // ___________________ Задание 8 ___________________

// function filterStringProperties(obj) {
//   const result = {};
//   for (const key in obj) {
//     if (typeof obj[key] === "string") {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }

// const mixedData = {
//   name: "Building",
//   floors: 5,
//   address: "Main Street",
//   yearBuilt: 1990,
// };

// console.log(filterStringProperties(mixedData));
// Ожидаемый результат: { name: 'Building', address: 'Main Street' }
// __________________________________________________
