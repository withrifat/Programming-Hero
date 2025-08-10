
// various params javascript

// for a given string tell me whether it has even number of characters or not 

function isEvennumber(str) {
    if (str.length % 2 === 0) {
        return 'Even number of characters';
    } else {
        return 'Odd number of characters';
    }
}
console.log(isEvennumber('Dhaka'));  




function numberOfElements (numbers) {
    const len = numbers.length;
    return len;
}
console.log(numberOfElements([1, 2, 3, 4, 5]));  


