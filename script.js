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

  function changeFontSize() {
    if ((display.textContent).length > 9) {
      display.style.fontSize = "30px";
    } else if ((display.textContent).length < 10) {
      display.style.fontSize = "60px";
    }
  }


  btn_nums.forEach(button => {
    button.addEventListener("click", () => {
      if (display.textContent === "0") {
        display.textContent = "";
      }
      if (operatorButtonIsClicked) {
        display.textContent = "";
        display.style.fontSize = "60px";
        operatorButtonIsClicked = false;
      }

      display.textContent += `${button.textContent}`;
      changeFontSize();
    });
  });

  btn_decimal.addEventListener("click", () => {
    if (!(display.textContent).includes(".")) {
      display.textContent += ".";
      changeFontSize(((display.textContent).length > 9), 30);
    }
  });

  const btn_backspace = document.querySelector(".backspace");
  btn_backspace.addEventListener("click", function() {

    if ((display.textContent).length === 1) {
      display.textContent = "0";
    } else {
      display.textContent = (display.textContent).slice(0, (display.textContent).length - 1);
      changeFontSize();
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
          changeFontSize();
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
        changeFontSize();
        firstNum = false;
        secondNum = false;
        operator = false;
      }
    }
  });

  const btn_clear = document.querySelector(".clear");
  btn_clear.addEventListener("click", () => {
    display.textContent = "0";
    changeFontSize();
    firstNum = false;
    secondNum = false;
    operator = false;
  })

  const btn_negate = document.querySelector(".negate");
  btn_negate.addEventListener("click", () => {
    if (!(display.textContent).includes("-")) {
      display.textContent = "-" + display.textContent;
    } else {
      display.textContent = (display.textContent).replace("-", "");
    }
    changeFontSize();
  });

  const btn_percent = document.querySelector(".percent");
  btn_percent.addEventListener("click", function() {
    display.textContent = multiply(display.textContent, "0.01");
    changeFontSize();
  });
  
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
