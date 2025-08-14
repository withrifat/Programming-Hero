/* 
validation js

*/

function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Error: Both inputs must be numbers.";
    }
    const multi = num1 * num2;
    return multi ;
}
console.log(multiply(2,"4"));

function fullName(firstName , secondName) {
    if (typeof firstName !== 'string' || typeof secondName !== 'string') {
        return "Error: Both inputs must be strings.";  
    }
    const fullName = firstName + " " + secondName ;
    return fullName ;
}
console.log(fullName("Rifat", "Hossain"));
console.log(fullName("Rifat", 9));



const objeEct = { name: 'mobile', price: 2000, color: 'white' };

function getPrice(product) {
    // Check if it's a valid non-null object and not an array
    if (typeof product !== 'object' || product === null || Array.isArray(product)) {
        return 'add a valid object';
    }

    // Check if price exists in object
    if (!('price' in product)) {
        return 'price not found in object';
    }

    return product.price;
}

console.log(getPrice(objeEct));      // 2000
