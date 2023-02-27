const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

ingredients.map((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = item;
  listItemEl.classList.add("item");
  ingredientsEl.append(listItemEl);
});
