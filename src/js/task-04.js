let counterValue = 0;
const valueEl = document.querySelector("#value");

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const handleDec = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const handleInc = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", handleDec);
incrementBtn.addEventListener("click", handleInc);
