const input = document.querySelector("#font-size-control");
console.log(input);

const span = document.querySelector("#text");
console.log(span);

input.addEventListener("input", handlerSpanSizeText);

function handlerSpanSizeText() {
  const textSize = input.value;
  console.log(textSize);
  span.style.fontSize = `${textSize}px`;
}
