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

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

let divCollection = "";

function createBoxes() {
  divCollection = "";

  for (let i = 1; i <= Number(input.value); i++) {
    let nextDivIncreaseStep = i - 1;

    const color = getRandomHexColor();

    const newDiv = `<div style=
    "width:${30 + 10 * nextDivIncreaseStep}px;
    height:${30 + 10 * nextDivIncreaseStep}px;
    background-color:${color};">
    </div>`;

    divCollection += newDiv;
  }
  divBox.insertAdjacentHTML("afterbegin", divCollection);
  console.dir(divCollection);
}

function destroyBoxes() {
  divBox.innerHTML = "";
  console.log("divCollection destroyed");
}
