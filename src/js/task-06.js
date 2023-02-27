const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  if (event.target.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else if (
    event.target.value.length > Number(0) &&
    event.target.value.length !== Number(inputEl.dataset.length)
  ) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  }
});
