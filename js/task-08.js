"use scrict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = {
    email: event.currentTarget.elements["email"].value,
    password: event.currentTarget.elements["password"].value,
  };

  if (input.email.length === 0 || input.password.length === 0) {
    alert("To be supplemented");
    return;
  }
  console.log(input);
  event.currentTarget.reset();
});
