let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultDisplayed = false;

function inputNumber(num) {
  if (resultDisplayed) {
    resetScreen();
  }
  if (operator === "") {
    firstNumber += num;
    document.getElementById("screen").value = firstNumber;
  } else {
    secondNumber += num;
    document.getElementById("screen").value =
      firstNumber + operator + secondNumber;
  }
}

function selectOperator(op) {
  if (firstNumber !== "") {
    operator = op;
    document.getElementById("screen").value = firstNumber + operator;
  }
}

function calculateResult() {
  if (firstNumber !== "" && secondNumber !== "") {
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "-":
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "x":
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case "/":
        if (secondNumber === "0") {
          alert("Cannot divide by zero");
          resetScreen();
          return;
        }
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
      default:
        return;
    }
    document.getElementById("screen").value = result;
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
    resultDisplayed = true;
  }
}

function resetScreen() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  resultDisplayed = false;
  document.getElementById("screen").value = "";
}
