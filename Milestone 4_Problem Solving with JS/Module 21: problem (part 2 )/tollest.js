const heights = [150, 160, 170, 180, 190];
const tallest = Math.max(...heights);
console.log("The tallest height is:", tallest);

function getMax(numbers) {
    let max = numbers[0];
    for ( const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log(getMax(heights));


// min
function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
console.log(getMin(heights));
