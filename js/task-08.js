"use scrict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = {
    email: e.currentTarget.elements["email"].value,
    password: e.currentTarget.elements["password"].value,
  };

  if (input.email.length === 0 || input.password.length === 0) {
    alert("To be supplemented");
    return;
  }
  console.log(input);
  e.currentTarget.reset();
});
