"use scrict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = {
    email: e.target.elements["email"].value,
    password: e.target.elements["password"].value,
  };

  if (input.email.length === 0 || input.password.length === 0) {
    alert("To be supplemented");
    return;
  }
  console.log(input);
  e.target.reset();
});
