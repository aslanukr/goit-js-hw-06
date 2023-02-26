const textInput = document.querySelector(".text-input");
const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", (event) => {
  if (event.target.value === "") {
    nameOutputEl.textContent = "Anonymous";
  } else {
    nameOutputEl.textContent = event.target.value;
  }
});
