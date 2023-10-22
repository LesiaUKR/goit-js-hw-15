const input = document.querySelector("#validation-input");
console.log(input);

const inputElDefaultLength = Number(input.getAttribute("data-length"));
console.log(inputElDefaultLength);

input.addEventListener("blur", validateInput);

function validateInput() {
  const inputText = input.value;
  console.log(inputText.length);

  if (inputText.length === inputElDefaultLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
