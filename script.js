function add(x, y) {
  return +x + +y;
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
  if (operator === "×") return multiply(x, y);
  if (operator === "÷") return divide(x, y);
}

function displayValue() {
  const display = document.querySelector(".display");
  let firstNum;
  let operator;
  let secondNum;
  let operatorButtonIsClicked = false;

  
  const btn_nums = document.querySelectorAll(".number");
  btn_nums.forEach(button => {
    button.addEventListener("click", () => {
      if (display.textContent === "0") {
        display.textContent = "";
      }
      if (operatorButtonIsClicked) {
        display.textContent = "";
        operatorButtonIsClicked = false;
      }

      display.textContent += `${button.textContent}`;

    });
  });

  const btn_operators = document.querySelectorAll(".operator")
  btn_operators.forEach(button => {
    button.addEventListener("click", () => {
      firstNum = display.textContent;
      operator = button.textContent;
      operatorButtonIsClicked = true;
    });
  });

  const btn_equal = document.querySelector(".equal");
  btn_equal.addEventListener("click", () => {
    secondNum = display.textContent;
    display.textContent = operate(operator, firstNum, secondNum);
  });

  const btn_clear = document.querySelector(".clear");
  btn_clear.addEventListener("click", () => {
    display.textContent = "0";
  })
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
  button.classList.add("operator");
  operatorContainer.appendChild(button);
})


displayValue();