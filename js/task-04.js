"use scrict";

const counter = {
  counterValue: 0,
  htmlObij: document.querySelector("#value"),
  updateCounter() {
    this.htmlObij.textContent = this.counterValue;
  },
  downCounter() {
    this.counterValue--;
    this.updateCounter();
  },
  upCounter() {
    this.counterValue++;
    this.updateCounter();
  },
};

document
  .querySelector(`button[data-action="increment"]`)
  .addEventListener("mouseup", counter.upCounter.bind(counter));
document
  .querySelector(`button[data-action="decrement"]`)
  .addEventListener("mouseup", counter.downCounter.bind(counter));
