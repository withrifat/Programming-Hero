
const price = [150, 160, 170, 180, 190];

function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers ) {
        if (num < min) {
            min = num ;
        }
    }
    return min ;
}
console.log(getMin(price));
