"use scrict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const activeText = input.value;
  output.textContent = activeText.length > 0 ? activeText : "Anonymous";
});
