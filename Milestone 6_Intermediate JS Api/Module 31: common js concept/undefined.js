// 
/**
 * undefined --> not define
 *  */

let money;
console.log(money)

function total(a, b) {
    console.log('value of parameters', a, b);
    const sum = a + b;
    console.log('total is', sum)
}

// total(2)
const result = total(5, 7);
// console.log('value of function call', result)

function total2(a, b) {
    console.log('value of parameters', a, b);
    if (a === undefined || b === undefined) {
        return;
    }
    if (a && b) {
        const sum = a + b;
        return sum;
    }

}

const result2 = total2(1)
// console.log('result2', result2)

const phone = { brand: 'samsu', price: 12500 }
// console.log(phone.color)

const banks = ['sonali', 'rupali', 'jomuna']
// console.log(banks[103])
delete banks[1]
console.log(banks[1])

console.log('type of undefined', typeof undefined)
console.log('type of null', typeof null)