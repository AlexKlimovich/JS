// ___________________ Задание про массивы ____________________

// const arr = [1, 2, [3, [6, 5, 4], [123]], 55, [123123123], [2, [45, [0], 634]]];

// function flatten(arr) {
//   const result = [];
//   const stack = [...arr];

//   while (stack.length > 0) {
//     const next = stack.pop();
//     if (Array.isArray(next)) {
//       stack.push(...next);
//     } else {
//       result.push(next);
//     }
//   }
//   return result.reverse();
// }
// console.log(flatten(arr));

// __________________________________________________

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
// ];

// function TableItem(product, styles = {}) {
//   this.element = document.createElement("tr");
//   const fields = [
//     product.id,
//     product.name,
//     `${product.price} $`,
//     product.category,
//     product.inStock ? "✅ В наличии" : "❌ Нет",
//   ];
//   fields.forEach((value) => {
//     const td = document.createElement("td");
//     td.textContent = value;
//     Object.assign(td.style, styles);
//     this.element.appendChild(td);
//   });
// }

// function render(products, containerId, rowStyles = {}) {
//   const table = document.createElement("table");
//   const thead = document.createElement("thead");
//   const tbody = document.createElement("tbody");

//   const headerRow = document.createElement("tr");
//   ["ID", "Название", "Цена", "Категория", "В наличии"].forEach((text) => {
//     const th = document.createElement("th");
//     th.textContent = text;
//     Object.assign(th.style, {
//       padding: "10px",
//       border: "1px solid #000",
//       backgroundColor: "#f2f2f2",
//     });
//     headerRow.appendChild(th);
//   });
//   thead.appendChild(headerRow);

//   products.forEach((product) => {
//     const item = new TableItem(product, rowStyles);
//     tbody.appendChild(item.element);
//   });

//   table.appendChild(thead);
//   table.appendChild(tbody);
//   table.style.borderCollapse = "collapse";
//   table.style.width = "100%";

//   const container = document.getElementById(containerId);
//   if (container) {
//     container.appendChild(table);
//   } else {
//     document.body.appendChild(table);
//   }
// }

// // 🔥 ВЫЗОВ ФУНКЦИИ — САМОЕ ВАЖНОЕ!
// render(products, "table-container", {
//   padding: "10px",
//   border: "1px solid #000",
//   textAlign: "center",
// });

// __________________________________________________

// ___________________ Задание 2 ____________________

// const items = document.querySelectorAll("li");

// items.forEach((item, index) => {
//   console.log(`Элемент ${index + 1}:`, item.textContent);
// });
// __________________________________________________

// ___________________ Задание 3 ____________________

// const paragraph = document.createElement("p");
// paragraph.textContent = "Это абзац, созданный с помощью JavaScript!";
// paragraph.style.fontSize = "36px";
// paragraph.style.fontWeight = "bold";
// const container = document.getElementById("container");
// container.appendChild(paragraph);
// __________________________________________________

// ___________________ Задание 4 ____________________

// let linksArr = [
//   "https://www.onliner.by/  ",
//   "https://www.youtube.com/  ",
//   "https://vk.com/  ",
//   "https://www.google.com/  ",
//   "https://yandex.ru/  ",
// ];

// const newDiv = document.createElement("div");
// newDiv.style.backgroundColor = "#00ff00";
// newDiv.style.padding = "150px";

// linksArr.forEach((urlRaw) => {
//   const url = urlRaw.trim();
//   const link = document.createElement("a");
//   link.href = url;
//   link.textContent = url;
//   link.target = "_blank";
//   link.style.display = "block";
//   link.style.margin = "10px 0";
//   link.style.color = "#1a0dab";

//   newDiv.appendChild(link);
// });

// const container = document.getElementById("array");
// container.appendChild(newDiv);
// __________________________________________________

// ___________________ Задание 5 ____________________

// function removeMyClassDivs() {
//   document.querySelectorAll("div.forRemove").forEach((el) => el.remove());
// }

// removeMyClassDivs();
// __________________________________________________

// const fruits = ["яблоко", "банан", "апельсин", "манго", "киви"];

// const secondFruit = fruits[1];
// console.log(secondFruit);

// fruits[2] = "виноград";
// console.log(fruits);

// fruits.push("ананас");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.unshift("клубника");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// console.log(fruits.slice(0, 3));

// console.log(fruits.includes("манго"));

// const prefix = "!";
// // fruits.map(item => item + "!")
// const newFruits = fruits.map((item) => `${item}${prefix}`);
// console.log(newFruits);

// let longNameFruits = fruits.filter((fruit) => fruit.length > 5);
// console.log(longNameFruits);
// __________________________________________________

// const numbers = [10, 5, 8, 20, 3, 15];
// const users = [
//   { name: "Алиса", age: 25 },
//   { name: "Боб", age: 30 },
//   { name: "Карина", age: 22 },
//   { name: "Давид", age: 35 },
// ];
// console.log(numbers);

// let numbersSum = numbers.reduce((sum, current) => sum + current, 0);
// console.log(numbersSum);

// const newNumbersArray = numbers.map((item) => item + 10);
// console.log(newNumbersArray);

// console.log(Math.max(...numbers));

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);

// console.log(numbers.includes(15));

// const names = users.map((user) => user.name);
// const namesString = names.join(", ");
// console.log(namesString);

// const foundUser = users.find((user) => user.name === "Боб");
// console.log(`Возраст Боба: ${foundUser.age}`);

// users.sort((a, b) => a.age - b.age);
// console.log(users);

// const adults = users.filter((user) => user.age > 25);
// // const sortedUsers = [...users].sort((a, b) => a.age - b.age);
// console.log(adults);

// __________________________________________________

// const products = [
//   {
//     id: 1,
//     name: "Ноутбук",
//     price: 45000,
//     category: "электроника",
//     inStock: true,
//   },
//   { id: 2, name: "Книга", price: 500, category: "книги", inStock: false },
//   { id: 3, name: "Мышь", price: 1200, category: "электроника", inStock: true },
//   { id: 4, name: "Кружка", price: 300, category: "посуда", inStock: true },
//   {
//     id: 5,
//     name: "Наушники",
//     price: 3500,
//     category: "электроника",
//     inStock: false,
//   },
// ];

// const orders = [
//   { productId: 1, quantity: 2, date: "2024-05-10" },
//   { productId: 3, quantity: 1, date: "2024-05-12" },
//   { productId: 4, quantity: 5, date: "2024-05-11" },
// ];

// const inStockProducts = [];

// for (let value of products) {
//   if (value.inStock === true) {
//     inStockProducts.push(value);
//   }
// }

// console.log(inStockProducts);

// const result = inStockProducts.reduce(
//   (sum, currentProduct) => sum + currentProduct.price,
//   0
// );

// console.log(result);

// const total = products
//   .filter(product => product.inStock)
//   .reduce((sum, product) => sum + product.price, 0);

// console.log(total);

// const electronic = products.filter(
//   (product) => product.category === "электроника"
// );
// console.log(electronic);

// const nameElectronics = electronic.map((electronic) => electronic.name);

// console.log(nameElectronics);

// const electronicNames = products
//   .filter(product => product.category === "электроника")
//   .map(product => product.name);

// console.log(electronicNames);

// const maxPrice = products
//   .filter((product) => product.inStock)
//   .sort((a, b) => b.price - a.price)[0];

// console.log(maxPrice);

// const nonInStock = products.filter((product) => !product.inStock);

// console.log(nonInStock.length);

// const newPrice = [...products].map((product) => product.price * 1.1);
// console.log(newPrice);

// const sumQuantity = orders.reduce((sum, product) => sum + product.quantity, 0);

// console.log(sumQuantity);

// const ordersWithDetails = orders.map((order) => {
//   // Находим товар, у которого id совпадает с order.productId
//   const product = products.find((p) => p.id === order.productId);

//   // Возвращаем новый объект: всё из заказа + поле product
//   return {
//     ...order, // копируем все свойства заказа (productId, quantity, date)
//     product: product, // добавляем найденный товар
//   };
// });

// console.log(ordersWithDetails);

// const cashOrder = orders.map((order) => {
//   const product = products.find((p) => p.id === order.productId);
//   return {
//     ...order,
//     product: product,
//   };
// });

// console.log(cashOrder);

// const totals = cashOrder.map((item) => item.quantity * item.product.price);

// const totalCash = totals.reduce((sum, item) => sum + item, 0);

// console.log(totalCash);

// const inStockProductsNew = products

//   .filter((product) => product.inStock)
//   .map((electronic) => electronic.category);
// const inStockProductsNew2 = [...new Set(inStockProductsNew)];
// console.log(inStockProductsNew2);

// const popularOrder = orders.map((order) => {
//   const product = products.find((p) => p.id === order.productId);
//   return {
//     ...order,
//     product: product,
//   };
// });

// const mostOrdered = popularOrder.reduce((max, order) =>
//   order.quantity > max.quantity ? order : max
// );

// console.log(mostOrdered.product.name);

//___________________________________________________________________

// const users = [
//   { id: 1, name: "Алиса", city: "Минск" },
//   { id: 2, name: "Боб", city: "Гомель" },
//   { id: 3, name: "Карина", city: "Минск" },
//   { id: 4, name: "Давид", city: "Брест" },
// ];

// const purchases = [
//   { userId: 1, amount: 1200, date: "2024-06-10" },
//   { userId: 1, amount: 300, date: "2024-06-15" },
//   { userId: 2, amount: 850, date: "2024-06-12" },
//   { userId: 3, amount: 2100, date: "2024-06-14" },
//   { userId: 1, amount: 500, date: "2024-07-01" }, // из другого месяца!
//   { userId: 4, amount: 900, date: "2024-06-20" },
// ];

// const datePart = "2024-06";
// const allPrice = purchases
//   // .filter(item => item.date.startsWith("2024-06"))
//   // .filter(item => item.date.slice(0, 7) === "2024-06")
//   .filter((item) => item.date.includes(datePart))
//   .map((item) => item.amount)
//   .reduce((sum, price) => sum + price, 0);

// console.log(allPrice);

// const cashOrder = purchases.map((order) => {
//   const user = users.find((p) => p.id === order.userId);
//   return {
//     ...order,
//     user: user,
//   };
// });
// console.log(cashOrder);

// const maxPriceName = cashOrder.sort((a, b) => b.amount - a.amount)[0];
// console.log(maxPriceName);
// console.log(maxPriceName.user.name);

// const sortUser = purchases.map((purchas) => purchas.userId);
// console.log(sortUser);
// const unicUser = [...new Set(sortUser)];
// console.log(unicUser.length);

// const sortUser = purchases.sort((a, b) => a.userId - b.userId);

// const groupedById = Object.groupBy(purchases, (item) => item.userId);
// const result = Object.entries(groupedById).map(([userId, purchases]) => {
//   // 1. Найти пользователя по id
//   const user = users.find((u) => u.id == userId); // == для сравнения число vs строка

//   // 2. Посчитать сумму покупок (только за июнь)
//   const total = purchases
//     .filter((p) => p.date.startsWith("2024-06"))
//     .reduce((sum, p) => sum + p.amount, 0);

//   return {
//     name: user ? user.name : "Неизвестный",
//     total: total,
//   };
// });

// console.log(result);

// // 1. Группируем покупки по userId (без Object.groupBy!)
// const groupedById = purchases.reduce((acc, item) => {
//   const key = item.userId;
//   if (!acc[key]) acc[key] = [];
//   acc[key].push(item);
//   return acc;
// }, {});

// // 2. Преобразуем в результат
// const result = Object.entries(groupedById).map(([userId, purchases]) => {
//   const user = users.find(u => u.id == userId); // == чтобы сравнить число и строку
//   const total = purchases
//     .filter(p => p.date.startsWith("2024-06")) // оставляем только июнь
//     .reduce((sum, p) => sum + p.amount, 0);
//   return {
//     name: user ? user.name : "Неизвестный",
//     total: total,
//   };
// });

// console.log(result);

// const cashOrder = purchases.map((order) => {
//   const user = users.find((p) => p.id === order.userId);
//   return {
//     ...order,
//     user: user,
//   };
// });
// console.log(cashOrder);

// const groupedById = Object.groupBy(cashOrder, (item) => item.user.city);
// const result = Object.entries(groupedById).map(([city, users]) => {
//   const total = result.filter((p) => p.date.startsWith("2024-06"));
// });
// // 2. Посчитать сумму покупок (только за июнь)

// //   .reduce((sum, p) => sum + p.amount, 0);

// // return {
// //   name: user ? user.name : "Неизвестный",
// //   total: total,
// // };

// const junePurchases = cashOrder.filter((p) => p.date.startsWith("2024-06"));
// const groupedByCity = junePurchases.reduce((acc, purchase) => {
//   const city = purchase.user.city;
//   if (!acc[city]) acc[city] = [];
//   acc[city].push(purchase);
//   return acc;
// }, {});

// const cityTotals = {};

// for (const [city, purchases] of Object.entries(groupedByCity)) {
//   const total = purchases.reduce((sum, purchase) => sum + purchase.amount, 0);
//   cityTotals[city] = total;
// }

// console.log(cityTotals);

// const topCity = Object.entries(cityTotals).reduce((maxEntry, currentEntry) =>
//   currentEntry[1] > maxEntry[1] ? currentEntry : maxEntry
// )[0];

// console.log(topCity);

// ________________________

// const usersWithoutPurchases = users.filter((user) => {
//   // Проверяем: есть ли покупка с таким userId?
//   return !purchases.some((purchase) => purchase.userId === user.id);
// });

// // Извлекаем только имена
// const names = usersWithoutPurchases.map((user) => user.name);

// console.log(names);

// ________________________

// const total = purchases.filter((p) => p.date.startsWith("2024-06"));
// const allPrice = total
//   .map((item) => item.amount)
//   .reduce((sum, amount) => sum + amount, 0);
// const averageCheck = allPrice / total.length;
// console.log(averageCheck);

// const junePurchases = purchases.filter(p => p.date.startsWith("2024-06"));
// const averageCheck = junePurchases.reduce((sum, p) => sum + p.amount, 0) / junePurchases.length;

// ________________________

// const monthlyCounts = purchases.reduce((acc, p) => {
//   const month = p.date.slice(0, 7);
//   acc[month] = (acc[month] || 0) + 1;
//   return acc;
// }, {});

// const mostActiveMonth = Object.entries(monthlyCounts)
//   .reduce((a, b) => b[1] > a[1] ? b : a)[0];

// console.log(mostActiveMonth);

// __________________________

// const cashOrder = purchases.map((order) => {
//   const user = users.find((p) => p.id === order.userId);
//   return {
//     ...order,
//     user: user,
//   };
// });

// const cashOrder = purchases.map((order) => ({
//   ...order,
//   user: users.find((u) => u.id === order.userId),
// }));

// console.log(cashOrder);
// const cheapPurchases = cashOrder.filter((a) => a.amount > 500);
// console.log(cheapPurchases);
// const cheapBuyers = cheapPurchases.map((p) => p.user.name);
// console.log("Все пользователи с покупками < 500:", cheapBuyers);

// // 1. Группируем покупки по userId
// const purchasesByUser = purchases.reduce((acc, p) => {
//   acc[p.userId] = acc[p.userId] || [];
//   acc[p.userId].push(p);
//   return acc;
// }, {});

// // 2. Находим пользователей, у которых ВСЕ покупки > 500
// const usersWithAllExpensivePurchases = users.filter((user) => {
//   const userPurchases = purchasesByUser[user.id] || [];
//   // Если у пользователя нет покупок — он не подходит (по смыслу задачи)
//   if (userPurchases.length === 0) return false;
//   // Проверяем: все ли покупки > 500?
//   return userPurchases.every((p) => p.amount > 500);
// });

// // 3. Извлекаем имена
// const names = usersWithAllExpensivePurchases.map((user) => user.name);

// console.log(names); // ["Боб", "Карина", "Давид"]

// _____________________________________________

// const books = [
//   { title: "1984", author: "Джордж Оруэлл", price: 450, inStock: true },
//   {
//     title: "Мастер и Маргарита",
//     athor: "Михаил Булгаков",
//     price: 520,
//     inStock: false,
//   },
//   {
//     title: "Гарри Поттер",
//     author: "Дж. К. Роулинг",
//     price: 600,
//     inStock: true,
//   },
//   {
//     title: "Преступление и наказание",
//     author: "Фёдор Достоевский",
//     price: 480,
//     inStock: true,
//   },
//   { title: "Анна Каренина", author: "Лев Толстой", price: 550, inStock: false },
//   { title: "Анна Каренина", author: "Лев Толстой", price: 550, inStock: false },
// ];

// const inStokBookNames = books.filter((a) => a.inStock === true);
// console.log(inStokBook);
// const inStokBookName = inStokBook.map((p) => p.title);
// console.log("Все книги в наличии:", inStokBookName);

// // const inStockBookNames = books
// //   .filter((book) => book.inStock)
// //   .map((book) => book.title);

// // console.log("Все книги в наличии:", inStockBookNames);

// const booksPrice = books.filter((book) => book.price > 500);
// console.log("Все книги стоимостью больше 500:", booksPrice);

// const bookHarryPotter = books.some((book) => book.title === "Гарри Поттер");
// console.log("Есть ли книга Гарри Поттер:", bookHarryPotter);

// const foundBook = books.find(
//   (book) => book.title === "Преступление и наказание"
// );
// console.log(`Стоимость книги "Преступление и наказание": ${foundBook.price}`);

// const newBookPrice = [...books].map((book) => book.price - 50);
// console.log(newBookPrice);

// const cheapBook = books
//   .filter((book) => book.inStock)
//   .sort((a, b) => a.price - b.price)[0];
// console.log("Самая дешевая книга:", cheapBook.title);

// const inStokBook = books.filter((a) => a.inStock === false);
// console.log("Количество книг не в наличии", inStokBook.length);

// const oneCheapBook = books.some((book) => book.price < 500);
// console.log(oneCheapBook);

// const everyBook = books.every((book) => book.price > 400);
// console.log(everyBook);

// const lionBook = books
//   .filter((book) => book.author === "Лев Толстой")
//   .map((book) => book.title);
// console.log("Названия книг Льва Толстого", lionBook);

// ____________________________________________________________

// const products = [
//   {
//     id: 1,
//     name: "Ноутбук",
//     category: "электроника",
//     price: 45000,
//     inStock: true,
//     rating: 4.7,
//   },
//   {
//     id: 2,
//     name: "Книга",
//     category: "книги",
//     price: 500,
//     inStock: false,
//     rating: 4.2,
//   },
//   {
//     id: 3,
//     name: "Мышь",
//     category: "электроника",
//     price: 1200,
//     inStock: true,
//     rating: 4.5,
//   },
//   {
//     id: 4,
//     name: "Кружка",
//     category: "посуда",
//     price: 300,
//     inStock: true,
//     rating: 4.0,
//   },
//   {
//     id: 5,
//     name: "Наушники",
//     category: "электроника",
//     price: 3500,
//     inStock: true,
//     rating: 4.8,
//   },
//   {
//     id: 6,
//     name: "Блокнот",
//     category: "книги",
//     price: 200,
//     inStock: true,
//     rating: 4.1,
//   },
// ];

// const cheapInStock = products.filter(
//   (product) => product.inStock && product.price < 400
// );
// console.log(cheapInStock);

// const ratingProduct = products.some((product) => product.rating > 4.7);
// console.log(ratingProduct);

// const electronicProducts = products
//   .filter((product) => product.inStock && product.category === "электроника")
//   .map((product) => product.name);
// console.log(electronicProducts);

// const maxPriceBook = products
//   .filter((product) => product.category === "книги")
//   .sort((a, b) => b.price - a.price)
//   .map((product) => product.name)[0];
// console.log(maxPriceBook);

// const badRating = products
//   .filter((product) => product.inStock)
//   .every((product) => product.rating >= 4.0);
// console.log(badRating);

// const idProduct = products.find((product) => product.id === 5);

// if (!idProduct) {
//   console.log("Такого id нет");
// } else {
//   console.log(idProduct.name);
// }

// if (idProduct === undefined) {
//   console.log("Такого id нет");
// } else {
//   const idProductName = idProduct.name;
//   console.log(idProductName);
// }

// const notInStockElectronics = products.filter(
//   (product) => !product.inStock && product.category === "электроника"
// );
// console.log(notInStockElectronics.length);

// const priceInStock = products
//   .filter((product) => product.inStock)
//   .map((product) => product.price);
// console.log(priceInStock);

// const trueProduct = products
//   .filter(
//     (product) => product.inStock && product.price > 1000 && product.price < 5000
//   )
//   .some((product) => product.rating > 4.4);
// console.log(trueProduct);

// const nameProduct = products
//   .filter((product) => product.category !== "книги")
//   .map((product) => product.name);
// console.log(nameProduct);

// const customers = [
//   { id: 1, name: "Алиса", email: "alice@example.com", city: "Минск" },
//   { id: 2, name: "Боб", email: "bob@example.com", city: "Гомель" },
//   { id: 3, name: "Карина", email: "karina@example.com", city: "Минск" },
//   { id: 4, name: "Давид", email: "david@example.com", city: "Брест" },
// ];

// const orders = [
//   {
//     id: 101,
//     customerId: 1,
//     total: 45000,
//     status: "доставлен",
//     date: "2024-06-10",
//   },
//   {
//     id: 102,
//     customerId: 1,
//     total: 1200,
//     status: "доставлен",
//     date: "2024-06-15",
//   },
//   { id: 103, customerId: 2, total: 850, status: "отменён", date: "2024-06-12" },
//   {
//     id: 104,
//     customerId: 3,
//     total: 2100,
//     status: "доставлен",
//     date: "2024-06-14",
//   },
//   { id: 105, customerId: 1, total: 500, status: "в пути", date: "2024-07-01" },
//   {
//     id: 106,
//     customerId: 4,
//     total: 900,
//     status: "доставлен",
//     date: "2024-06-20",
//   },
// ];

// const sumDelivery = orders
//   .filter((order) => order.status === "доставлен")
//   .reduce((sum, current) => sum + current.total, 0);
// console.log(sumDelivery);

// // Шаг 1: превратить второй массив в Map по id
// const map2 = new Map(orders.map((item) => [item.customerId, item]));

// // Шаг 2: пройти по первому массиву и объединить
// const result = customers.map((item1) => {
//   const item2 = map2.get(item1.id); // ищем совпадение по id
//   return { ...item1, ...item2 }; // объединяем объекты
// });

// console.log(result);

// const ordersWithDetails = orders.map((order) => {
//   const customer = customers.find((p) => p.id === order.customerId);
//   return {
//     ...order,
//     customer: customer,
//   };
// });

// console.log(ordersWithDetails);

// const deliveryDone = ordersWithDetails.filter(
//   (product) => product.status === "доставлен"
// );
// console.log(deliveryDone);

// const uniqueObjects = deliveryDone.filter(
//   (item, index, self) =>
//     index === self.findIndex((t) => t.customerId === item.customerId)
// );
// console.log(uniqueObjects);

// const deliveryName = uniqueObjects.map((product) => product.customer.name);
// console.log(deliveryName);

// ---------------------------!!!!!!!!!!!!!!!!!!!!!

// // 1. Получаем ID клиентов с доставленными заказами
// const deliveredCustomerIds = orders
//   .filter((order) => order.status === "доставлен")
//   .map((order) => order.customerId);
// console.log(deliveredCustomerIds);
// // 2. Делаем уникальными
// const uniqueIds = [...new Set(deliveredCustomerIds)];
// console.log(uniqueIds);
// // 3. Находим имена
// const customerNames = uniqueIds.map((id) => {
//   const customer = customers.find((c) => c.id === id);
//   return customer.name;
// });

// console.log(customerNames); // ["Алиса", "Карина", "Давид"]

// // ---------------------------!!!!!!!!!!!!!!!!!!!!!

// const ordersWithDetails = orders.map((order) => {
//   const customer = customers.find((p) => p.id === order.customerId);
//   return {
//     ...order,
//     customer: customer,
//   };
// });

// const dateOrder = ordersWithDetails.filter((item) =>
//   item.date.startsWith("2024-06")
// );

// console.log(dateOrder.length);

// const deliveryOrders = orders.filter(
//   (delivery) => delivery.status === "доставлен"
// );
// const halfPrice =
//   deliveryOrders.reduce((sum, total) => sum + total.total, 0) /
//   deliveryOrders.length;
// console.log(halfPrice);

// !-----------------------------------!!!!!!!!!!!!!!!!

// // 1. Объединяем заказы с данными клиентов (опционально, но удобно)
// const ordersWithDetails = orders.map(order => ({
//   ...order,
//   customer: customers.find(c => c.id === order.customerId)
// }));

// // 2. Группируем заказы по customerId
// const groupedOrders = ordersWithDetails.reduce((groups, order) => {
//   const id = order.customerId; // ← берём ID из самого заказа

//   // Создаём пустой массив, если ещё нет группы для этого ID
//   if (!groups[id]) {
//     groups[id] = [];
//   }

//   // Добавляем текущий заказ в группу
//   groups[id].push(order);

//   return groups;
// }, {}); // начальное значение — пустой объект {}

// // 3. Выводим результат
// console.log(groupedOrders);

// !=======================!!!!!!!!!!!!!!!!!!!!!!!

// const orderWithDetails = orders.map((order) => {
//   const customer = customers.find((p) => p.id === order.customerId);
//   return {
//     ...order,
//     customer: customer,
//   };
// });
// const deliveryOrder = orderWithDetails.filter(
//   (delivery) => delivery.status === "доставлен"
// );
// console.log(deliveryOrder);

// const groupedById = Object.groupBy(orderWithDetails, (item) => item.customerId);
// console.log(groupedById);

// let maxCount = 0;
// let topCustomerId = null;

// for (const [customerId, ordersList] of Object.entries(groupedById)) {
//   if (ordersList.length > maxCount) {
//     maxCount = ordersList.length;
//     topCustomerId = Number(customerId);
//   }
// }
// const topCustomer = customers.find((c) => c.id === topCustomerId);
// console.log(topCustomer?.name || "Нет доставленных заказов");

// __________________________________________________

// const orderWithDetails = orders.map((order) => {
//   const customer = customers.find((p) => p.id === order.customerId);
//   return {
//     ...order,
//     customer: customer,
//   };
// });
// console.log(orderWithDetails);

// const filerOrder = orderWithDetails
//   .filter((status) => status.status === "доставлен")
//   .map((city) => city.customer.city);
// console.log(filerOrder);

// const uniqueCity = [...new Set(filerOrder)];
// console.log(uniqueCity);

// !_________!!!!!!!!!!!!!!!

// const citiesWithDeliveries = [
//   ...new Set(
//     orders
//       .filter((order) => order.status === "доставлен")
//       .map((order) => {
//         const customer = customers.find((c) => c.id === order.customerId);
//         return customer.city;
//       })
//   ),
// ];

// console.log(citiesWithDeliveries); // ["Минск", "Брест"]

// !_____________!!!!!!!!!!!!

// // 1. Группируем заказы по customerId
// const ordersByCustomer = orders.reduce((groups, order) => {
//   const id = order.customerId;
//   if (!groups[id]) groups[id] = [];
//   groups[id].push(order);
//   return groups;
// }, {});

// // 2. Проверяем: есть ли клиент, у которого все заказы — "доставлены"
// const exists = Object.values(ordersByCustomer).some(
//   (orderList) =>
//     orderList.length > 0 &&
//     orderList.every((order) => order.status === "доставлен")
// );

// console.log(exists); // true

// function double(x) {
//   return x * 2;
// }

// console.log(double(10));

// function sayHello() {
//   return "Здравствуйте!";
// }

// console.log(sayHello());

// function isPositive(num) {
//   if (num > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPositive(-1));

// function getGreeting(time) {
//   if (time < 12) {
//     return "Доброе утро!";
//   } else if (time > 12) {
//     return "Добрый день!";
//   }
// }

// console.log(getGreeting(13));

// const book = {
//   title: "1984",
//   author: "Джордж Оруэлл",
//   pages: 328,
// };

// function getFullName(person) {
//   return person.firstName + " " + person.secondName;
// }

// const person = {
//   firstName: "Алиса",
//   secondName: "Иванова",
// };

// console.log(getFullName(person));

// const users = [
//   { name: "Алиса", age: 25, city: "Минск" },
//   { name: "Боб", age: 30, city: "Гомель" },
//   { name: "Карина", age: 28, city: "Минск" },
//   { name: "Давид", age: 22, city: "Брест" },
// ];

// const userName = users.map((user) => user.name);
// console.log(userName);

// const userName = users.map(function(user) {
//   return user.name;
// });

// const userName = [];
// for (let i = 0; i < users.length; i++) {
//   userName.push(users[i].name);
// }

// const nameMinsk = users
//   .filter((city) => city.city === "Минск")
//   .map((user) => user.name);
// console.log(nameMinsk);

// const userName = users.filter(function (user) {
//   return user.city === "Минск";
// });

// const nameMinsk2 = userName.map(function (p) {
//   return p.name;
// });

// console.log(nameMinsk2);

// const agePeopleLiveInMinsk = users
//   .filter((city) => city.city === "Минск")
//   .reduce((sum, age) => sum + age.age, 0);

// console.log(agePeopleLiveInMinsk);

// const peopleLiveInMinsk = users.filter(function (city) {
//   return city.city === "Минск";
// });

// const test = peopleLiveInMinsk.map(function (age) {
//   return age.age;
// });

// console.log(test);

// const agePeopleLiveInMinsk2 = test.reduce(function (sum, age) {
//   return sum + age;
// });
// console.log(agePeopleLiveInMinsk2);

// const average = agePeopleLiveInMinsk2 / test.length;
// console.log(average);

// const minskUsers = users.filter((u) => u.city === "Минск");
// const average = minskUsers.length
//   ? minskUsers.reduce((sum, u) => sum + u.age, 0) / minskUsers.length
//   : 0;

// const users = [
//   { name: "Алиса", age: 25, city: "Минск" },
//   { name: "Боб", age: 30, city: "Гомель" },
//   { name: "Карина", age: 28, city: "Минск" },
//   { name: "Давид", age: 22, city: "Брест" },
//   { name: "Елена", age: 20, city: "Минск" },
// ];

// const ageUserName = users
//   .filter((user) => user.city === "Минск")
//   .sort((a, b) => a.age - b.age)
//   .map((user) => user.name);

// const ageUserNameresult =
//   ageUserName.length > 0 ? ageUserName[0] : "В Минске никого нет";
// console.log(ageUserNameresult);

// const userCity = users.filter(function (user) {
//   return user.city === "Минск";
// });

// const userSortAge = userCity.sort(function (a, b) {
//   return a.age - b.age;
// });

// const ageUserName2 = userSortAge.map(function (user) {
//   return user.name;
// });

// const ageUserNameresult2 =
//   ageUserName2.length > 0 ? ageUserName2[0] : "В Минске никого нет";
// console.log(ageUserNameresult2);

// const userAge = users
//   .filter((user) => user.city === "Минск")
//   .every((user) => user.age > 20);
// console.log(userAge);

// const userCity = users.filter(function (user) {
//   return user.city === "Минск";
// });

// const userAge2 = userCity.every(function (user) {
//   return user.age > 20;
// });

// console.log(userAge2);

// const groupedCity = users.reduce((groups, user) => {
//   const city = user.city;
//   if (!groups[city]) {
//     groups[city] = [];
//   }
//   groups[city].push(user);
//   return groups;
// }, {});

// console.log(groupedCity);

// const entries = Object.entries(groupedCity);

// const maxCity = entries.reduce((max, current) => {
//   return current[1].length > max[1].length ? current : max;
// })[0];

// console.log(maxCity);

// const grupped = users.reduce((groups, user) => {
//   const city = user.city;
//   if (!groups[city]) {
//     groups[city] = [];
//   }
//   groups[city].push(user);
//   return groups;
// }, {});

// console.log(grupped);

// const report = Object.fromEntries(
//   Object.entries(grupped).map(([city, cityUsers]) => {
//     const count = cityUsers.length;
//     const age = cityUsers.reduce((sum, user) => sum + user.age, 0);
//     const avgAge = Math.round((age / count) * 10) / 10;
//     return [city, { count, avgAge }];
//   })
// );

// console.log(report);

// const products = [
//   { id: 1, name: "Ноутбук", price: 45000, category: "электроника" },
//   { id: 2, name: "Книга", price: 500, category: "книги" },
//   { id: 3, name: "Мышь", price: 1200, category: "электроника" },
//   { id: 4, name: "Кружка", price: 300, category: "посуда" },
//   { id: 5, name: "Блокнот", price: 200, category: "книги" },
// ];

// const gruppedCategory = products.reduce((grupped, product) => {
//   const category = product.category;
//   if (!grupped[category]) {
//     grupped[category] = [];
//   }
//   grupped[category].push(product);
//   return grupped;
// }, {});
// console.log(gruppedCategory);

// const report = Object.fromEntries(
//   Object.entries(gruppedCategory).map(([category, products]) => {
//     const count = products.length;
//     const price = products.reduce((sum, price) => sum + price.price, 0);
//     return [category, { count, price }];
//   })
// );

// console.log(report);

// const customers = [
//   { id: 1, name: "Алиса", city: "Минск" },
//   { id: 2, name: "Боб", city: "Гомель" },
//   { id: 3, name: "Карина", city: "Минск" },
//   { id: 4, name: "Давид", city: "Брест" },
// ];

// const orders = [
//   { id: 101, customerId: 1, total: 45000 },
//   { id: 102, customerId: 1, total: 1200 },
//   { id: 103, customerId: 2, total: 850 },
//   { id: 104, customerId: 3, total: 2100 },
//   { id: 105, customerId: 1, total: 500 },
//   { id: 106, customerId: 4, total: 900 },
// ];

// const gruppedList = orders.reduce((grupped, custom) => {
//   const order = custom.customerId;
//   if (!grupped[order]) {
//     grupped[order] = [];
//   }
//   grupped[order].push(custom);
//   return grupped;
// }, {});

// console.log(gruppedList);

// const report = customers.map((customer) => {
//   const customerOrder = gruppedList[customer.id] || [];
//   const totalPrice = customerOrder.reduce((sum, price) => sum + price.total, 0);
//   return {
//     name: customer.name,
//     totalPrice: totalPrice,
//   };
// });

// console.log(report);

// const products = [
//   {
//     id: 1,
//     name: "Ноутбук",
//     price: 45000,
//     category: "электроника",
//     inStock: true,
//   },
//   { id: 2, name: "Книга", price: 500, category: "книги", inStock: false },
//   { id: 3, name: "Мышь", price: 1200, category: "электроника", inStock: true },
//   { id: 4, name: "Кружка", price: 300, category: "посуда", inStock: true },
//   { id: 5, name: "Блокнот", price: 200, category: "книги", inStock: true },
// ];

// const orders = [
//   { id: 101, productId: 1, quantity: 1 },
//   { id: 102, productId: 3, quantity: 2 },
//   { id: 103, productId: 4, quantity: 5 },
//   { id: 104, productId: 2, quantity: 1 }, // книга не в наличии!
//   { id: 105, productId: 5, quantity: 3 },
// ];

// // const totalPrice = orders
// //   .map((order) => {
// //     const product = products.find((p) => p.id === order.productId);
// //     return product.price * order.quantity;
// //   })
// //   .reduce((sum, total) => sum + total, 0);

// // console.log(totalPrice);

// // const totalPrice2 = orders.reduce((sum, order) => {
// //   const product = products.find((p) => p.id === order.productId);
// //   return sum + product.price * order.quantity;
// // }, 0);
// // console.log(totalPrice2);

// // const outOfStockOrdered = orders
// //   .map((order) => {
// //     const product = products.find((p) => p.id === order.productId);
// //     return product;
// //   })
// //   .filter((product) => product !== undefined)
// //   .filter((product) => !product.inStock)
// //   .map((product) => product.name);

// // console.log(outOfStockOrdered);

// // Топ-1 категория по выручке
// // Для каждого заказа — найти товар → категория + выручка (price * quantity),
// // Сгруппировать по category,
// // Посчитать общую выручку по категории,
// // Вернуть категорию с максимумом.
// // Результат: "электроника" (проверьте!)

// const categoryRevenue = orders.map((order) => {
//   const product = products.find((p) => p.id === order.productId);
//   return {
//     category: product.category,
//     revenue: product.price * order.quantity,
//   };
// });

// // Шаг 2: группируем по категории и суммируем выручку
// const grouped = categoryRevenue.reduce((acc, item) => {
//   if (!acc[item.category]) {
//     acc[item.category] = 0;
//   }
//   acc[item.category] += item.revenue;
//   return acc;
// }, {});

// // Шаг 3: находим категорию с максимальной выручкой
// const topCategory = Object.entries(grouped).reduce((max, current) =>
//   current[1] > max[1] ? current : max
// )[0];

// console.log(topCategory);

// const customers = [
//   { id: 1, name: "Алиса", city: "Минск", isVip: true },
//   { id: 2, name: "Боб", city: "Гомель", isVip: false },
//   { id: 3, name: "Карина", city: "Минск", isVip: false },
//   { id: 4, name: "Давид", city: "Брест", isVip: true },
// ];

// const orders = [
//   { id: 101, customerId: 1, total: 45000, status: "доставлен" },
//   { id: 102, customerId: 1, total: 1200, status: "доставлен" },
//   { id: 103, customerId: 2, total: 850, status: "отменён" },
//   { id: 104, customerId: 3, total: 2100, status: "доставлен" },
//   { id: 105, customerId: 1, total: 500, status: "в пути" },
//   { id: 106, customerId: 4, total: 900, status: "доставлен" },
// ];

// const vipName = customers.filter((vip) => vip.isVip).map((user) => user.name);

// console.log(vipName);

// const fullOrder = orders.map((order) => {
//   const customer = customers.find((p) => p.id === order.customerId);
//   return {
//     ...order, // все поля заказа
//     customer: customer, // + клиент как вложенный объект
//   };
// });

// console.log(fullOrder);

// const vipCustomer = fullOrder
//   .filter(
//     (customer) => customer.customer.isVip && customer.status === "доставлен"
//   )
//   .reduce((sum, customer) => sum + customer.total, 0);
// console.log(vipCustomer);

// const fullOrderStatus = orders.map((order) => {
//   const customer = customers.find((p) => p.id === order.customerId);
//   return {
//     ...order,
//     customer: customer,
//   };
// });

// const maxVipCustomer = fullOrderStatus.filter(
//   (customer) => customer.customer.isVip && customer.status === "доставлен"
// );

// console.log(maxVipCustomer);

// const gruppedOrder = orders.reduce((grupped, order) => {
//   const customId = order.customerId;
//   if (!grupped[customId]) {
//     grupped[customId] = [];
//   }
//   grupped[customId].push(order);
//   return grupped;
// }, {});
// console.log(gruppedOrder);

// const totalByCustomer = Object.fromEntries(
//   Object.entries(gruppedOrder).map(([customerId, orders]) => {
//     const total = orders.reduce((sum, order) => sum + order.total, 0);
//     const customer = customers.find((p) => p.id === orders.customerId);
//     return [customerId, total];
//   })
// );

// console.log(totalByCustomer);

// let maxTotal = 0;
// let topCustomerId = null;

// for (const [customerId, total] of Object.entries(totalByCustomer)) {
//   if (total > maxTotal) {
//     maxTotal = total;
//     topCustomerId = Number(customerId); // важно: строка → число
//   }
// }

// // Находим имя по id
// const topCustomer = customers.find((customer) => customer.id === topCustomerId);

// // Выводим имя
// console.log(topCustomer?.name || "Нет заказов");

// const customers = [
//   { id: 1, name: "Алиса", city: "Минск", isVip: true },
//   { id: 2, name: "Боб", city: "Гомель", isVip: false },
//   { id: 3, name: "Карина", city: "Минск", isVip: false },
//   { id: 4, name: "Давид", city: "Брест", isVip: true },
// ];

// const orders = [
//   { id: 101, customerId: 1, total: 45000, status: "доставлен" },
//   { id: 102, customerId: 1, total: 1200, status: "доставлен" },
//   { id: 103, customerId: 2, total: 850, status: "отменён" },
//   { id: 104, customerId: 3, total: 2100, status: "доставлен" },
//   { id: 105, customerId: 1, total: 500, status: "в пути" },
//   { id: 106, customerId: 4, total: 900, status: "доставлен" },
// ];

// const idAlice = customers.find((customer) => customer.name === "Алиса");
// const orderAlice = orders.filter(
//   (customer) => customer.customerId === idAlice.id
// );

// console.log(orderAlice.length);

// const orderBreak = orders.filter((p) => p.status === "отменён");
// const fullOrder = orderBreak.map((order) => {
//   const customer = customers.find((p) => p.id === order.customerId);
//   return {
//     ...order,
//     customer: customer,
//   };
// });

// const customerName = [
//   ...new Set(fullOrder.map((customer) => customer.customer.name)),
// ];
// console.log(customerName);

// const fullOrder = orders.map((order) => {
//   const customer = customers.find((p) => p.id === order.customerId);
//   return {
//     ...order,
//     customer: customer,
//   };
// });
// console.log(fullOrder);
// const deliveryOrder = fullOrder.filter((p) => p.status === "доставлен");

// console.log(deliveryOrder);

// const gruppedCity = deliveryOrder.reduce((grupped, city) => {
//   const cityGrup = city.customer.city;
//   if (!grupped[cityGrup]) {
//     grupped[cityGrup] = [];
//   }
//   grupped[cityGrup].push(city);
//   return grupped;
// }, {});

// console.log(gruppedCity);

// const totalByCity = {};
// for (const [city, orders] of Object.entries(gruppedCity)) {
//   totalByCity[city] = orders.reduce((sum, order) => sum + order.total, 0);
// }

// console.log(totalByCity);

// const topCity = Object.entries(totalByCity).reduce((max, curr) =>
//   curr[1] > max[1] ? curr : max
// )[0];

// console.log(topCity);

// const customers = [
//   { id: 1, name: "Алиса", city: "Минск", isVip: true, age: 28 },
//   { id: 2, name: "Боб", city: "Гомель", isVip: false, age: 35 },
//   { id: 3, name: "Карина", city: "Минск", isVip: false, age: 24 },
//   { id: 4, name: "Давид", city: "Брест", isVip: true, age: 31 },
//   { id: 5, name: "Елена", city: "Минск", isVip: false, age: 19 },
// ];

// const orders = [
//   { id: 101, customerId: 1, total: 45000, status: "доставлен" },
//   { id: 102, customerId: 1, total: 1200, status: "доставлен" },
//   { id: 103, customerId: 2, total: 850, status: "отменён" },
//   { id: 104, customerId: 3, total: 2100, status: "доставлен" },
//   { id: 105, customerId: 1, total: 500, status: "в пути" },
//   { id: 106, customerId: 4, total: 900, status: "доставлен" },
//   { id: 107, customerId: 5, total: 3000, status: "доставлен" },
// ];

// const gruppedCity = customers.reduce((grupped, city) => {
//   const cityGrup = city.city;
//   if (!grupped[cityGrup]) {
//     grupped[cityGrup] = [];
//   }
//   grupped[cityGrup].push(city);
//   return grupped;
// }, {});

// const cityCounts = {};
// for (const [city, customers] of Object.entries(gruppedCity)) {
//   cityCounts[city] = customers.length;
// }

// console.log(cityCounts);

// // const cityCounts = customers.reduce((acc, customer) => {
// //   acc[customer.city] = (acc[customer.city] || 0) + 1;
// //   return acc;
// // }, {});

// const nameCityMinsk = customers
//   .filter((p) => p.city === "Минск")
//   .map((p) => p.name);

// console.log(nameCityMinsk);

// const fullOrder = orders.map((order) => {
//   const customer = customers.find((p) => p.id === order.customerId);
//   return {
//     ...order,
//     customer: customer,
//   };
// });
// console.log(fullOrder);
// const deliveryOrder = fullOrder.filter((p) => p.status === "доставлен");

// console.log(deliveryOrder);

// const gruppedCity = deliveryOrder.reduce((grupped, city) => {
//   const cityGrup = city.customer.city;
//   if (!grupped[cityGrup]) {
//     grupped[cityGrup] = [];
//   }
//   grupped[cityGrup].push(city);
//   return grupped;
// }, {});

// console.log(gruppedCity);

// const totalByCity = {};
// for (const [city, orders] of Object.entries(gruppedCity)) {
//   totalByCity[city] = orders.reduce((sum, order) => sum + order.total, 0);
// }

// console.log(totalByCity);

// const youngVip = customers.filter((p) => p.isVip).sort((a, b) => a.age - b.age);
// console.log(youngVip.length ? youngVip[0].name : "Нет VIP-клиентов");

// // const youngestVip = customers
// //   .filter(p => p.isVip)
// //   .reduce((min, current) => (current.age < min.age ? current : min));

// // console.log(youngestVip.name);

// const fullOrder = orders.map((order) => {
//   const customer = customers.find((p) => p.id === order.customerId);
//   return {
//     ...order,
//     customer: customer,
//   };
// });
// console.log(fullOrder);

// const gruppedCity = fullOrder.reduce((grupped, idCustomer) => {
//   const castomerGrup = idCustomer.customer.id;
//   if (!grupped[castomerGrup]) {
//     grupped[castomerGrup] = [];
//   }
//   grupped[castomerGrup].push(idCustomer);
//   return grupped;
// }, {});

// console.log(gruppedCity);

// const notDelivered = Object.entries(gruppedCity);

// const customersWithoutDelivered = customers

//   .filter((customer) => {
//     // 1. Получить заказы этого клиента
//     const ordersOfCustomer = gruppedCity[customer.id] || [];

//     // 2. Проверить: есть ли среди них "доставленные"?
//     const hasDelivered = ordersOfCustomer.some(
//       (order) => order.status === "доставлен"
//     );

//     // 3. Нам нужны клиенты, у которых НЕТ доставленных заказов
//     return !hasDelivered;
//   })
//   .map((p) => p.name);
// console.log(customersWithoutDelivered);

// const customers = [
//   { id: 1, name: "Алиса", city: "Минск", isVip: true, age: 28 },
//   { id: 2, name: "Боб", city: "Гомель", isVip: false, age: 35 },
//   { id: 3, name: "Карина", city: "Минск", isVip: false, age: 24 },
//   { id: 4, name: "Давид", city: "Брест", isVip: true, age: 31 },
//   { id: 5, name: "Елена", city: "Минск", isVip: false, age: 19 },
// ];

// const orders = [
//   { id: 101, customerId: 1, total: 45000, status: "доставлен" },
//   { id: 102, customerId: 1, total: 1200, status: "доставлен" },
//   { id: 103, customerId: 2, total: 850, status: "отменён" },
//   { id: 104, customerId: 3, total: 2100, status: "доставлен" },
//   { id: 105, customerId: 1, total: 500, status: "в пути" },
//   { id: 106, customerId: 4, total: 900, status: "доставлен" },
//   { id: 107, customerId: 5, total: 3000, status: "доставлен" },
// ];

// const vipCustomer = customers.filter((p) => p.isVip);
// console.log(vipCustomer);

// const gruppedCity = vipCustomer.reduce((grupped, city) => {
//   const cityGrup = city.city;
//   if (!grupped[cityGrup]) {
//     grupped[cityGrup] = [];
//   }
//   grupped[cityGrup].push(city);
//   return grupped;
// }, {});

// console.log(Object.entries(gruppedCity));

// const vipCity = {};
// for (const [city, orders] of Object.entries(gruppedCity)) {
//   vipCity[city] = orders.length;
// }

// console.log(Object.entries(vipCity));

// const maxCity = Object.entries(vipCity).reduce((max, curr) => {
//   return curr[1] > max[1] ? curr : max;
// })[0];

// console.log(maxCity);

// const gruppedCity = customers.reduce((grupped, city) => {
//   const cityGrup = city.city;
//   if (!grupped[cityGrup]) {
//     grupped[cityGrup] = [];
//   }
//   grupped[cityGrup].push(city);
//   return grupped;
// }, {});

// console.log(Object.entries(gruppedCity));

// for (const [city, age] of Object.entries(gruppedCity)) {
//   const ageCustomer = age.reduce((sum, age) => sum + age.age, 0) / age.length;
//   const rounded = Math.round(ageCustomer);
//   console.log(city, rounded);
// }

const customers = [
  { id: 1, name: "Алиса", city: "Минск", isVip: true, age: 28 },
  { id: 2, name: "Боб", city: "Гомель", isVip: false, age: 35 },
  { id: 3, name: "Карина", city: "Минск", isVip: false, age: 24 },
  { id: 4, name: "Давид", city: "Брест", isVip: true, age: 31 },
  { id: 5, name: "Елена", city: "Минск", isVip: false, age: 19 },
];

const orders = [
  { id: 101, customerId: 1, total: 45000, status: "доставлен" },
  { id: 102, customerId: 1, total: 1200, status: "доставлен" },
  { id: 103, customerId: 2, total: 850, status: "отменён" },
  { id: 104, customerId: 3, total: 2100, status: "доставлен" },
  { id: 105, customerId: 1, total: 500, status: "в пути" },
  { id: 106, customerId: 4, total: 900, status: "доставлен" },
  { id: 107, customerId: 5, total: 3000, status: "доставлен" },
];

// const notDelivered = orders.filter((p) => p.status !== "доставлен");
// console.log(notDelivered);

// const fullOrder = notDelivered.map((order) => {
//   const customer = customers.find((p) => p.id === order.customerId);
//   return {
//     ...order,
//     customer: customer,
//   };
// });
// console.log(fullOrder);

// const allName = fullOrder.map((p) => p.customer.name);
// const unicName = [...new Set(allName)];
// console.log(unicName);

// const delivered = orders.filter((p) => p.status === "доставлен");
// console.log(delivered);

// const fullOrder = delivered.map((order) => {
//   const customer = customers.find((p) => p.id === order.customerId);
//   return {
//     ...order,
//     customer: customer,
//   };
// });
// console.log(fullOrder);

// const vip = fullOrder.filter((p) => p.customer.isVip);
// console.log(vip);

// const halfPrice = vip.reduce((sum, total) => sum + total.total, 0) / vip.length;
// console.log(halfPrice);

// const notVip = customers.filter((p) => !p.isVip);

// const cityGroup = notVip.reduce((grupped, city) => {
//   const grupCity = city.city;
//   if (!grupped[grupCity]) {
//     grupped[grupCity] = [];
//   }
//   grupped[grupCity].push(city);
//   return grupped;
// }, {});
// console.log(cityGroup);

const allCustomersByCity = customers.reduce((acc, customer) => {
  if (!acc[customer.city]) acc[customer.city] = [];
  acc[customer.city].push(customer);
  return acc;
}, {});

const nonVipCities = Object.entries(allCustomersByCity)
  .filter(([city, customers]) => customers.every((customer) => !customer.isVip))
  .map(([city]) => city);

console.log(nonVipCities);
