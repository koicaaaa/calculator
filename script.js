const DEFAULT_OPERATOR = "number";
const DEFAULT_DISPLAY = "";

currentOperator = DEFAULT_OPERATOR;
currentDisplay = DEFAULT_DISPLAY;

const addition = document.querySelector("#add");
const subtraction = document.querySelector("#subtract");
const multiplication = document.querySelector("#multiply");
const divison = document.querySelector("#divide");
const one = document.querySelector("#one");
const two = document.querySelector("#two");


function changeOperator(newOperator) {
    currentOperator = newOperator;
}

function changeDisplay(newDisplay) {
    currentDisplay += newDisplay;
}

addition.addEventListener("click", changeOperator("addition"));
one.addEventListener("click", changeDisplay("1"));

console.log(currentDisplay);

function operate(a, b) {
    a = 1;
    b = 2;

    if (currentOperator === "addition") {
        arrayList = [a, b];
        result1 = add(arrayList);
        result2 = subtract(arrayList);
        result3 = multiply(arrayList);
        result4 = divide(arrayList);

        console.log(result1);
        console.log(result2);
        console.log(result3);
        console.log(result4);
    }
}

operate();

function add(array) {
    return array.reduce((product, current) => product + current);
}

function subtract(array) {
    return array.reduce((product, current) => product - current);
}

function multiply(array) {
    return array.reduce((product, current) => product * current);
}

function divide(array) {
    return array.reduce((product, current) => product / current);
}