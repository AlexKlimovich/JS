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

const products = [
  {
    id: 1,
    name: "Ноутбук",
    price: 1200,
    category: "electronics",
    inStock: true,
  },
  { id: 2, name: "Стул", price: 150, category: "furniture", inStock: false },
  { id: 3, name: "Книга", price: 20, category: "books", inStock: true },
];

function TableItem(product, styles = {}) {
  this.element = document.createElement("tr");
  const fields = [
    product.id,
    product.name,
    `${product.price} $`,
    product.category,
    product.inStock ? "✅ В наличии" : "❌ Нет",
  ];
  fields.forEach((value) => {
    const td = document.createElement("td");
    td.textContent = value;
    Object.assign(td.style, styles);
    this.element.appendChild(td);
  });
}

function render(products, containerId, rowStyles = {}) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const headerRow = document.createElement("tr");
  ["ID", "Название", "Цена", "Категория", "В наличии"].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    Object.assign(th.style, {
      padding: "10px",
      border: "1px solid #000",
      backgroundColor: "#f2f2f2",
    });
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  products.forEach((product) => {
    const item = new TableItem(product, rowStyles);
    tbody.appendChild(item.element);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";

  const container = document.getElementById(containerId);
  if (container) {
    container.appendChild(table);
  } else {
    document.body.appendChild(table);
  }
}

// 🔥 ВЫЗОВ ФУНКЦИИ — САМОЕ ВАЖНОЕ!
render(products, "table-container", {
  padding: "10px",
  border: "1px solid #000",
  textAlign: "center",
});

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
