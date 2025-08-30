
// function declaration
function add(num1, num2) {
    return num1 + num2;
}

// function expression
const addition = function (num1, num2) {
    return num1 + num2
}

// arrow function
const add2 = (num1, num2) => num1 + num2;
const multiply = (a, b) => a * b;
const sumAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
const isFirstBig = (x, y) => x > y;



// multi line arrow function 
const doMath = (x, y) => {
    const makeDouble = x * 2;
    const againDouble = y * 2;
    const result = makeDouble + againDouble;
    return result
}

const result = add2(17, 13);
console.log(result)
const mult = multiply(5, 7);
console.log(mult);

const isBig = isFirstBig(5, 12);
console.log(isBig)