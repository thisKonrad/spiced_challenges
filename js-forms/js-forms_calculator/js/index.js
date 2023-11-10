console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
const numA = documnet.querySelector('#number-a').value;
const numB = documnet.querySelector('#number-b').value;

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {

  event.preventDefault();

  let result;

  result = add(numA,numB),subtract(numA,numB),multiply(numA,numB),divide(numA,numB);

  resultOutput.textContent = result;
});
