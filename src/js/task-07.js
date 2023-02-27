const sizeControlEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");
textEl.style.fontSize = `${sizeControlEl.value}px`;

sizeControlEl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.target.value}px`;
});

console.log(sizeControlEl.value);
