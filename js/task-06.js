"use scrict";

const input = document.querySelector("#validation-input");

input.addEventListener("blur", (e) => {
  const validLength = e.currentTarget.getAttribute("data-length");
  const activeInput = e.currentTarget.value;

  let toAdd;
  let toUnAdd;

  if (validLength == activeInput.length) {
    toAdd = "valid";
    toUnAdd = "invalid";
  } else {
    toAdd = "invalid";
    toUnAdd = "valid";
  }

  if (!e.currentTarget.classList.contains(toAdd))
    e.currentTarget.classList.add(toAdd);
  if (e.currentTarget.classList.contains(toUnAdd))
    e.currentTarget.classList.remove(toUnAdd);
});
