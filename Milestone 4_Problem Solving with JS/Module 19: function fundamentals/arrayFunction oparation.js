
// array - oparation - funtion 

// object: write a funtion to give me the sum of all numbers in an array 

let numbers = [1, 2, 3, 4, 5];
function sumOfArray(arr) {
    let sum = 0 ;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfArray(numbers));  