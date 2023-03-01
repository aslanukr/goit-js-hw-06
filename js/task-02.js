const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const listItems = [];

ingredients.map((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = item;
  listItemEl.classList.add("item");
  listItems.push(listItemEl);
});

ingredientsEl.append(...listItems);
