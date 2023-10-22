function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBox = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

console.log(divBox);
console.log(input);
console.log(createBtn);
console.log(destroyBtn);

function createBoxes(amount) {
  const divCollection = [];

  for (let i = 0; i < amount; i++) {
    console.log(i);
    const newDiv = document.createElement("div");
    console.log(newDiv);
    newDiv.style.width = `${30 + 10 * i}px`;
    newDiv.style.height = `${30 + 10 * i}px`;
    newDiv.style.background = getRandomHexColor();

    divCollection.push(newDiv);
  }

  divBox.append(...divCollection);
}

createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

function destroyBoxes() {
  divBox.innerHTML = "";
  input.value = "";
  console.log("divCollection destroyed");
}

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
