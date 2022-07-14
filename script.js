function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operator, x, y) {
  if (operator === "+") return add(x, y);
  if (operator === "-") return subtract(x, y);
  if (operator === "*") return multiply(x, y);
  if (operator === "/") return divide(x, u);
}

function displayValue() {
  const display = document.querySelector(".display");

  
  const btn_nums = document.querySelectorAll(".number");
  btn_nums.forEach(button => {
    button.addEventListener("click", () => {
      if (display.textContent === "0") {
        display.textContent = "";
      }
      display.textContent += `${button.textContent}`;

    })
  });
}

const numContainer = document.querySelector(".num-container");
for (let i = 0; i < 10; i ++) {
  const button = document.createElement("button");
  button.textContent = `${i}`;
  button.classList.add("number");
  numContainer.appendChild(button);
}

const operatorContainer = document.querySelector(".operator-container");
arr_operators = ["+", "-", "×", "÷"];
arr_operators.forEach(operator => {
  const button = document.createElement("button");
  button.textContent = operator;
  operatorContainer.appendChild(button);
})


displayValue();