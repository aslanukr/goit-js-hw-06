function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputAmountEl = document.querySelector("input[type=number]");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function handleCreateBtn() {
  const basicBoxSize = 30;

  for (let i = 0; i < inputAmountEl.value; i += 1) {
    let boxColor = getRandomHexColor();
    let boxSize = i * 10 + basicBoxSize;
    const boxMarkup = `<div style="background:${boxColor}; width:${boxSize}px; height:${boxSize}px; margin: 0 auto" > </div>`;
    boxesEl.insertAdjacentHTML("beforeend", boxMarkup);
  }
}

createBtn.addEventListener("click", handleCreateBtn);
destroyBtn.addEventListener("click", () => {
  boxesEl.innerHTML = "";
});
