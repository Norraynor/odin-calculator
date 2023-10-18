let firstVar = 0;
let secondVar = 0;
let currentOperator = "";
let previousOperator = "";
let displayValue = "0";
const displayText = document.querySelector('.text');
const numberKeys = document.querySelectorAll('.numbers .key');
const operatorKeys = document.querySelectorAll(".operators .key");

numberKeys.forEach(key => key.addEventListener('click', setValue))
operatorKeys.forEach(key => key.addEventListener('click',setOperator))

function updateDisplay(text) {
    displayText.textContent = text;
}

function setOperator(oper) {
    let newOperator = oper.target.dataset.operator;
    if (newOperator === 'equal') {
        operate(previousOperator, firstVar, secondVar);        
    } else {
        previousOperator = currentOperator;
        currentOperator = newOperator;
        operate(previousOperator, firstVar, secondVar);        
    }
    console.log(previousOperator, currentOperator);
}
function setValue(number) {
    let newNumber = +number.target.dataset.value;
    updateDisplay(newNumber)
    if (firstVar === 0 || currentOperator === '') {
        firstVar = newNumber;
        secondVar = 0;
    } else {
        secondVar = newNumber;
    }
    console.log("number 1:", firstVar, "number 2:", secondVar);
}

function add(a, b) {
    return +a + +b;
}
function subtract(a, b) {
    return +a - +b;
}
function multiply(a, b) {
    return +a * +b;
}
function divide(a, b) {
    if (b === 0) {
        return "ERROR CANNOT DIVIDE BY 0";
    }
    return +a / +b;
}
function operate(operator, a, b) {
    let result = 0;
    //depending on operator call different function
    switch (operator) {
        case "add":
            result = add(a, b);
            break;
        case "sub":
            result = subtract(a, b);
            break;
        case "mul":
            result = multiply(a, b);
            break;
        case "div":
            result = divide(a, b);
            break;
        case "clear":
            firstVar = 0;
            secondVar = 0;
            operator = "";
            result = 0;
            break;
        default:
            result = 0;
            break;
    }
    //show on display
    updateDisplay(result);
}