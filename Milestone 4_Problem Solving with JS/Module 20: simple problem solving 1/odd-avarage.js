

// funtion take an arraty as paremeter
// give me the avarage of the odd numbers in the array 
// 1, put odd number in aray

function oddAverage(numbers) {
    const odds = [];
    for (const num of numbers) {
        if (num % 2 === 1) {
            odds.push(num);
        }
    }
    if (odds.length === 0) return 0; // or whatever you want if no odd numbers
    
    let sum = 0;
    for (const num of odds) {
        sum += num;
    }
    
    const avg = sum / odds.length;
    return avg;
}

const averageArray = [43, 55, 32, 55, 66, 22];
const avg = oddAverage(averageArray);
console.log(avg);  // Output will be average of 43, 55, 55
