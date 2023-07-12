let firstOperand = 0;
let operator;
let secondOperand = 0;

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  return a.reduce((a, b) => a + b, 0);
};

const multiply = function (...a) {
  let product = 1;
  for (let i = 0; i < a.length; i++) {
    product *= a[i];
  }
  return product;
};
const divide = function (...a) {
  let product = 1;
  for (let i = 0; i < a.length; i++) {
    product /= a[i];
  }
  return product;
};

function operate(operand1, operator, operand2) {
  return add(operand1, operand2);
}

console.log(operate());
