let firstVar = 0;
let operator = "";
let secondVar = 0;
let displayValue = "0";
const displayText = document.querySelector('.text');

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
    if (a === 0 || b === 0) {
        return "ERROR CANNOT DIVIDE BY 0";
    }
    return +a / +b;
}
function operate(operator, a, b) {
    //depending on operator call different function
    switch (operator) {
        case "add":
            add(a, b);
            break;
        case "sub":
            subtract(a, b);
            break;
        case "mul":
            multiply(a, b);
            break;
        case "div":
            divide(a, b);
            break;
        case "del":
            firstVar = 0;
            secondVar = 0;
            operator = "";
            break;
		}
}