const formEl = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const { email, password } = event.target;
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповненими!");
  }

  const elements = {
    email: email.value,
    password: password.value,
  };
  console.log(elements);

  event.target.reset();
};

formEl.addEventListener("submit", handleSubmit);
