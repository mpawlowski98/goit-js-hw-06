"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const vegetablesItem = [];

ingredients.forEach((ingredient) => {
  const vegetables = document.createElement("li");
  vegetables.textContent = ingredient;
  vegetablesItem.push(vegetables);
});
document.querySelector("#ingredients").append(...vegetablesItem);
