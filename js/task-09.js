function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", (e) => {
  const randomColor = getRandomHexColor();

  document.querySelector("body").style.backgroundColor = randomColor;
  document.querySelector(".color").tekstContent = randomColor;
});
