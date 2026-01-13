const images = [
  {
    srac: "Иван Петров",
    age: 45,
    education: "university",
    id: "1",
    children: [
      {
        name: "Мария Петрова",
        age: 18,
        education: "school",
        id: "2",
      },
    ],
  },
  {
    name: "Анна Сидорова",
    age: 38,
    education: "university",
    id: "3",
  },
  {
    name: "Сергей Иванов",
    age: 32,
    education: "university",
    id: "4",
    children: [
      {
        name: "Мария Иванов",
        age: 8,
        education: "school",
        id: "5",
      },
    ],
  },
  {
    name: "Ольга Кузнецова",
    age: 29,
    education: "university",
    id: "6",
  },
  {
    name: "Алексей Смирнов",
    age: 52,
    education: "university",
    id: "7",
    children: [
      {
        name: "Елена Смирнова",
        age: 22,
        education: "university",
        id: "8",
      },
      {
        name: "Павел Смирнов",
        age: 19,
        education: "school",
        id: "9",
      },
    ],
  },
  {
    name: "Татьяна Воробьева",
    age: 41,
    education: "school",
    id: "10",
    children: [
      {
        name: "Кирилл Воробьев",
        age: 15,
        education: "school",
        id: "11",
      },
    ],
  },
  {
    name: "Михаил Орлов",
    age: 60,
    education: "university",
    id: "12",
    children: [
      {
        name: "Надежда Орлова",
        age: 35,
        education: "university",
        id: "13",
        children: [
          {
            name: "Артем Орлов",
            age: 5,
            education: "school",
            id: "14",
          },
        ],
      },
    ],
  },
  {
    name: "Екатерина Новикова",
    age: 27,
    education: "university",
    id: "15",
  },
  {
    name: "Денис Федоров",
    age: 48,
    education: "school",
    id: "16",
    children: [
      {
        name: "Виктория Федорова",
        age: 20,
        education: "university",
        id: "17",
      },
      {
        name: "Георгий Федоров",
        age: 17,
        education: "school",
        id: "18",
      },
    ],
  },
  {
    name: "Людмила Козлова",
    age: 55,
    education: "university",
    id: "19",
    children: [
      {
        name: "Андрей Козлов",
        age: 30,
        education: "university",
        id: "20",
      },
    ],
  },
];

const createEl = (elem) => document.createElement(elem);

// ------------------------------ By parents
const input = createEl("input");
input.placeholder = "By parents";
// ------------------------------

// ------------------------------ By children
const childrenInput = createEl("input");
childrenInput.placeholder = "By children";
// ------------------------------

// ------------------------------ By education
const educationSelect = createEl("select");
educationSelect.placeholder = "By education";

const emtyOption = createEl("option");
emtyOption.textContent = "";
const schoolOption = createEl("option");
schoolOption.textContent = "school";
const univerOption = createEl("option");
univerOption.textContent = "university";

educationSelect.append(emtyOption, schoolOption, univerOption);
// ------------------------------

document.body.append(input, childrenInput, educationSelect);

const ul = createEl("ul");

const filter = {
  searchByParents: "",
  searchByChildren: "",
  searchByEducation: "",
};

input.addEventListener("keyup", (event) => {
  filter.searchByParents = event.target.value;
  renderPersons(immutablePersons, filter);
});

childrenInput.addEventListener("keyup", (event) => {
  filter.searchByChildren = event.target.value;
  renderPersons(immutablePersons, filter);
});

educationSelect.addEventListener("change", (event) => {
  filter.searchByEducation = event.target.value;
  renderPersons(immutablePersons, filter);
});

const renderPersons = (persons, filter) => {
  ul.innerHTML = "";
  let result = structuredClone(persons);

  if (filter.searchByParents) {
    result = result.filter((person) =>
      person.name.toLowerCase().includes(filter.searchByParents.toLowerCase())
    );
  }

  if (filter.searchByChildren) {
    result.forEach((person) => {
      if (person.children) {
        person.children = person.children.filter((child) =>
          child.name
            .toLowerCase()
            .includes(filter.searchByChildren.toLowerCase())
        );
      }
    });
  }

  if (filter.searchByEducation) {
    // result = result.filter(
    //   (person) =>
    //     person.education.includes(filter.searchByEducation) ||
    //     person.children?.some((child) =>
    //       child.education.includes(filter.searchByEducation)
    //     )
    // );
    // result = result
    //   .map((person) => {
    //     person.children = person.children?.filter((child) =>
    //       child.education.includes(filter.searchByEducation)
    //     );
    //     if (
    //       person.education.includes(filter.searchByEducation) ||
    //       person.children?.length
    //     ) {
    //       return person;
    //     }
    //     return null;
    //   })
    //   .filter(Boolean);
    result = filterTreeByEducation(result, filter.searchByEducation);
  }
  function filterTreeByEducation(data, search) {
    return data.filter((elem) => {
      if (elem.education === search && (elem.children?.length ?? 0) === 0) {
        return true;
      }

      if ((elem.children?.length ?? 0) > 0 && elem.education === search) {
        elem.children = filterTreeByEducation(elem.children, search);

        return true;
      }

      return false;
    });

    // return persons
    //   .map((person) => {
    //     person.children = person.children
    //       ? filterTreeByEducation(person.children, search)
    //       : [];

    //     if (
    //       person.education.includes(filter.searchByEducation) ||
    //       person.children.length
    //     ) {
    //       return person;
    //     }

    //     return null;
    //   })
    //   .filter(Boolean);
  }

  result.forEach((person) => {
    const personLi = createEl("li");
    personLi.textContent = `Name: ${person.name}; Status: Parent; Education: ${person.education}`;
    ul.append(personLi);

    if (person.children) {
      const childUl = createEl("ul");

      person.children.forEach((child) => {
        const childLi = createEl("li");
        childLi.textContent = `Name: ${child.name}; Status: Children; Education: ${child.education}`;
        childUl.append(childLi);
      });

      personLi.append(childUl);
    }
  });

  document.body.append(ul);
};

renderPersons(immutablePersons, filter);
