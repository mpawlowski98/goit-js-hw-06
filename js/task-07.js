"use scrict";

function changeFont(ojb, size) {
  ojb.style.fontSize = size + "px";
}

const input = document.querySelector("#font-size-control");
input.value = 16;

input.addEventListener("input", (e) => {
  const target = document.querySelector("#text");
  changeFont(target, e.target.value);
});
