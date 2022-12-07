"use scrict";

const input = document.querySelector("#validation-input");

input.addEventListener("blur", (e) => {
  const validLength = e.target.getAttribute("data-length");
  const activeInput = e.target.value;

  let toAdd;
  let toUnAdd;

  if (validLength == activeInput.length) {
    toAdd = "valid";
    toUnAdd = "invalid";
  } else {
    toAdd = "invalid";
    toUnAdd = "valid";
  }

  if (!e.target.classList.contains(toAdd)) e.target.classList.add(toAdd);
  if (e.target.classList.contains(toUnAdd)) e.target.classList.remove(toUnAdd);
});
