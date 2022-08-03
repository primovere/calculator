function add(x, y) {
  return +x + +y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

const roundAccurately = (number, btn_decimalPlaces) =>
  Number(Math.round(number + "e" + btn_decimalPlaces) + "e-" + btn_decimalPlaces);
function divide(x, y) {
  return roundAccurately((x / y), 10);
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

  btn_decimal.addEventListener("click", () => {
    if (!(display.textContent).includes(".")) {
      display.textContent += ".";
    }
  });

  const btn_backspace = document.querySelector(".backspace");
  btn_backspace.addEventListener("click", function() {
    if ((display.textContent).length === 1) {
      display.textContent = "0";
    } else {
      display.textContent = (display.textContent).slice(0, (display.textContent).length - 1);
    }
  });

  
  btn_operators.forEach(button => {
    button.addEventListener("click", () => {
      if (firstNum && operator) {
        if (display.textContent === "0" && operator === "÷") {
          alert("Cannot divide by 0!");
        } else {
          secondNum = display.textContent;
          display.textContent = operate(operator, firstNum, secondNum);
        }
      }
      firstNum = display.textContent;
      operator = button.textContent;
      operatorButtonIsClicked = true;
    });
  });

  const btn_equal = document.querySelector(".equal");
  btn_equal.addEventListener("click", () => {
    if (firstNum && operator) {
      secondNum = display.textContent;
      if (display.textContent === "0" && operator === "÷") {
        operator = false;
        alert("Cannot divide by 0!");
      } else {
        display.textContent = operate(operator, firstNum, secondNum);
        firstNum = false;
        secondNum = false;
        operator = false;
      }
    }
  });

  const btn_clear = document.querySelector(".clear");
  btn_clear.addEventListener("click", () => {
    display.textContent = "0";
    firstNum = false;
    secondNum = false;
    operator = false;
  })
}

const numContainer = document.querySelector(".num-container");
for (let i = 0; i < 10; i++) {
  const button = document.createElement("button");
  button.textContent = `${i}`;
  button.classList.add("number");
  numContainer.appendChild(button);
}
const btn_nums = document.querySelectorAll(".number");
const btn_one = btn_nums[1];
const btn_decimal = document.createElement("button");
btn_decimal.textContent = ".";
btn_decimal.classList.add("number");
numContainer.insertBefore(btn_decimal, btn_one);

const operatorContainer = document.querySelector(".operator-container");
arr_operators = ["+", "-", "×", "÷"];
arr_operators.forEach(operator => {
  const button = document.createElement("button");
  button.textContent = operator;
  button.classList.add("operator");
  operatorContainer.appendChild(button);
})
const btn_operators = document.querySelectorAll(".operator")
btn_minus = btn_operators[1];
btn_minus.style.fontSize = "35px";
displayValue();
