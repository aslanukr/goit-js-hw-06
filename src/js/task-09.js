function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const changeColorBtnEl = document.querySelector(".change-color");
const colorNameEl = document.querySelector(".color");

const handleColorBtnClick = (event) => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = getRandomHexColor();
};

changeColorBtnEl.addEventListener("click", handleColorBtnClick);
