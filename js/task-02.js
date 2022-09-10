const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listWithId = document.querySelector("#ingredients");

const elemOfIngredients = ingredients.map((ingredient) => {
const listItem = document.createElement(`li`);
listItem.classList.add('item');
listItem.textContent = ingredient;
listWithId.append(listItem);
});