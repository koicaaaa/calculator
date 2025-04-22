let DEFAULT_OPERATOR = "addition";

currentOperator = DEFAULT_OPERATOR;

function changeOperator(newOperator) {
    currentOperator = newOperator;
}

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