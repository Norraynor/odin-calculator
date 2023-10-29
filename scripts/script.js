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
function getDisplayText() {
    return displayText.textContent;
}

function setOperator(oper) {
    let newOperator = oper.target.dataset.operator;
    if (newOperator === 'clear') {
        operate(newOperator);
    }

    previousOperator = currentOperator;
    currentOperator = newOperator;
    if (previousOperator !== "equal" && previousOperator !== "") {
        operate(previousOperator, firstVar, secondVar);
    }
    console.log("prev oper:",previousOperator,"curr oper:", currentOperator);
}
function setValue(number) {
    if ((currentOperator === 'equal' && previousOperator === '')) {
        operate('clear');
    }
    let newNumber = number.target.dataset.value;
    let currentText = getDisplayText();
    if (newNumber === "period" && currentText.indexOf(".") > 0) {
			return;
		}
    if (isNaN(firstVar) && newNumber !== 'period') {
        operate('clear');
    }
    if (newNumber === 'period') {
        newNumber = ".";
    }
    else {
        newNumber = +newNumber;
    }
    let numberToDisplay = newNumber;
    if (currentOperator === '') {
        if (+currentText === 0) {
            firstVar = newNumber;
            currentOperator = '';
            } else {
                firstVar = currentText + newNumber.toString();
            }
        secondVar = 0;
        numberToDisplay = firstVar;
    } else {
        if (secondVar === 0) {
            secondVar = newNumber;
        } else {
            secondVar = currentText + newNumber.toString();
        }
        numberToDisplay = secondVar;
    }
    updateDisplay(numberToDisplay);
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
    if (+b === 0) {
        return "CANNOT DIVIDE BY 0";
    }
    return +a / +b;
}
function operate(operator, a, b) {
    a = Number(a).toFixed(4);
    b = Number(b).toFixed(4);
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
            previousOperator = "";
            currentOperator = "";
            result = 0;
            break;
        default:
            result = 0;
            break;
    }
    //show on display
    result = Math.round((result + Number.EPSILON) * 10000) / 10000; //4 decimal places, 100 for 2, 1000 for 3, etc.
    updateDisplay(result);
    firstVar = result; 
    secondVar = 0;
    previousOperator = '';
}