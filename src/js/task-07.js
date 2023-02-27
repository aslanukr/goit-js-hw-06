const sizeControlEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

sizeControlEl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.target.value}px`;
});
