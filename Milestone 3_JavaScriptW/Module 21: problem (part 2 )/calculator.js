
/* 
create a calculator using funtion
*/

function add(num1, num2) {
    sum = num1 + num2;
    return sum;
}
function minus(num1, num2) {
    sum = num1 - num2;
    return sum;
}
function multiply(num1, num2) {
    sum = num1 * num2;
    return sum;
}
function divide(num1, num2) {
    sum = num1 / num2;
    return sum;
}

function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    } else if (operation === 'minus') {
        const result = minus(a, b);
        return result;
    } else if (operation === 'multiply') {
        const result = multiply(a, b);
        return result;
    } else if (operation === 'divide') {
        const result = divide(a, b);
        return result;  
    } else {
        return ` Only add : 'subtract' , 'multiplay', 'divide', operations is allowed.`
    }
}

console.log(calculator(22, 44, 'add'));
console.log(calculator(22, 44, 'minus'));
console.log(calculator(22, 44, 'multiply'));
console.log(calculator(22, 44, 'divide'));
console.log(calculator(22, 44, 'none'));