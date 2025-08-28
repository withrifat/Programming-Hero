
// javaScript conditional return
function checkNumber(num) {
    if (num > 0) {
        return 'Positive number';
    } else if (num < 0) {
        return 'Negative number';
    } else {
        return 'Zero';
    }
}

console.log(checkNumber(10));  // Output: Positive number
console.log(checkNumber(-5));  // Output: Negative number
console.log(checkNumber(0));   // Output: Zero
// Example of a function that returns a value based on a condition
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

console.log(isEvenOrOdd(10));  // Output: Even
console.log(isEvenOrOdd(5));   // Output: Odd   