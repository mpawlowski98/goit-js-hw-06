"use scrict";

const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  const validLength = event.currentTarget.getAttribute("data-length");
  const activeInput = event.currentTarget.value;

  let toAdd;
  let toUnAdd;

  if (validLength == activeInput.length) {
    toAdd = "valid";
    toUnAdd = "invalid";
  } else {
    toAdd = "invalid";
    toUnAdd = "valid";
  }

  if (!event.currentTarget.classList.contains(toAdd))
    event.currentTarget.classList.add(toAdd);
  if (event.currentTarget.classList.contains(toUnAdd))
    event.currentTarget.classList.remove(toUnAdd);
});
