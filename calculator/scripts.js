// JavaScript (scripts.js)
let firstOperand = null;
let operator = null;
let secondOperand = null;
let result = null;

const displayElement = document.querySelector(".display");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equals");
const plusMinusButton = document.querySelector(".plusMinus");

const operatorButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(
  ".calculator button:not(.operator, .clear, .equals)"
);

clearButton.addEventListener("click", () => {
  clear();
  displayElement.textContent = "";
});

for (const button of numberButtons) {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    displayElement.textContent += buttonText;
  });
}

for (const operatorButton of operatorButtons) {
  operatorButton.addEventListener("click", () => {
    const operatorText = operatorButton.textContent;
    if (["+", "-", "x", "÷", "%"].includes(operatorText)) {
      if (firstOperand !== null && operator !== null) {
        secondOperand = parseFloat(displayElement.textContent);
        calculate();
        firstOperand = result;
        operator = operatorText; // Save the operator value
      } else {
        firstOperand = parseFloat(displayElement.textContent);
        operator = operatorText; // Save the operator value
      }
      displayElement.textContent = "";
    }
  });
}

equalButton.addEventListener("click", () => {
  if (firstOperand !== null && operator !== null) {
    secondOperand = parseFloat(displayElement.textContent);
    calculate();
    displayElement.textContent = result;
    firstOperand = result;
    operator = null;
    secondOperand = null;
  }
});

plusMinusButton.addEventListener("click", () => {
  if (displayElement.textContent !== "") {
    const currentValue = parseFloat(displayElement.textContent);
    displayElement.textContent = (-currentValue).toString();
  }
});

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
  if (b === 0) throw new Error("Cannot divide by zero.");
  return a / b;
}

function remainder(a, b) {
  return (a * b) / 100;
}

function calculate() {
  switch (operator) {
    case "+":
      result = add(firstOperand, secondOperand);
      break;
    case "-":
      result = subtract(firstOperand, secondOperand);
      break;
    case "x":
      result = multiply(firstOperand, secondOperand);
      break;
    case "÷":
      result = divide(firstOperand, secondOperand);
      break;
    case "%":
      result = remainder(firstOperand, secondOperand);
      break;
    default:
      throw new Error("Unknown operator.");
  }
}

function clear() {
  firstOperand = null;
  operator = null;
  secondOperand = null;
  result = null;
}
