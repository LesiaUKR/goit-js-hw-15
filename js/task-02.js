const input = document.querySelector("#font-size-control");

const span = document.querySelector("#text");

span.style.fontSize = input.value + "px";

input.addEventListener("input", handleSpanTextSizing);

function handleSpanTextSizing() {
  const textSize = input.value;

  span.style.fontSize = `${textSize}px`;
}
