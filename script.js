let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

const display = document.querySelector(".calculatorOutput");

const operators = document.querySelectorAll("[data-operator]");
const numbers = document.querySelectorAll("[data-number]");
const equalBtn = document.getElementById("equal");
const deleteBtn = document.getElementById("deleteButton");
const clear = document.getElementById("allClear");

deleteBtn.addEventListener("click", deleteNumber);
clear.addEventListener("click", clearNumbers);
equalBtn.addEventListener("click", evaluate);


numbers.forEach((button) => {
    button.addEventListener("click", () => {
        appendNumber(button.textContent);
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        changeOperation(operator.textContent);
    })
})

function appendNumber(num) {
    if (display.textContent === "0" || shouldResetScreen) {
        resetScreen();
    }
    display.textContent += num;
}

function resetScreen() {
    display.textContent = "";
    shouldResetScreen = false;
}

function clearNumbers() {
    display.textContent = "0";
    firstOperand = "";
    secondOperand = "";
    currentOperation = null;
}

function deleteNumber() {
    display.textContent = display.textContent
    .toString()
    .slice(0, -1)
}

function changeOperation(operator) {
    if (currentOperation !== null) {
        evaluate()
    }
    firstOperand = display.textContent;
    currentOperation = operator;
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return;
    if (currentOperation === "÷" && display.textContent === "0") {
        alert("You can't divide by 0.");
        return;
    }
    secondOperand = display.textContent
    display.textContent = roundResult(operate(currentOperation, firstOperand, secondOperand))
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

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

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "÷":
            if (b === 0) return null
            return divide(a, b);
        default:
            return null;
    }
}