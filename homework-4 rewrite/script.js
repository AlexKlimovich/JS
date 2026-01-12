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
  {
    id: 4,
    name: "Наушники",
    price: 80,
    category: "electronics",
    inStock: true,
  },
  { id: 5, name: "Стол", price: 300, category: "furniture", inStock: true },
];

function TableItem(options) {
  this.data = options.data;
  this.styles = options.styles;
  this.columns = options.columns;

  this.render = function () {
    const root = document.getElementById("table-container");
    const table = document.createElement("table");
    Object.assign(table.style, this.styles.table);
    const thead = document.createElement("thead");
    Object.assign(thead.style, this.styles.thead);
    const headerRow = document.createElement("tr");
    this.columns.forEach((item) => {
      const th = document.createElement("th");
      Object.assign(th.style, this.styles.th);
      th.textContent = item.label;
      headerRow.appendChild(th);
    });

    const tbody = document.createElement("tbody");
    Object.assign(tbody.style, this.styles.tbody);
    this.data.forEach((item) => {
      const tr = document.createElement("tr");
      Object.assign(tr.style, this.styles.tr);
      this.columns.forEach((col) => {
        const td = document.createElement("td");
        Object.assign(td.style, this.styles.td);
        td.textContent = item[col.key];
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);
    table.appendChild(tbody);
    root.appendChild(table);
  };
}

const table = new TableItem({
  data: products,
  styles: {
    table: {
      borderCollapse: "collapse",
      width: "100%",
      marginTop: "20px",
    },
    th: {
      border: "1px solid #333",
      padding: "8px",
      backgroundColor: "#f2f2f2",
      textAlign: "center",
    },
    td: {
      border: "1px solid #333",
      padding: "8px",
    },
  },
  columns: [
    { key: "id", label: "ID" },
    { key: "name", label: "Название" },
    { key: "price", label: "Цена" },
    { key: "category", label: "Категория" },
    { key: "inStock", label: "В наличии" },
  ],
});
table.render();
// __________________________________________________
