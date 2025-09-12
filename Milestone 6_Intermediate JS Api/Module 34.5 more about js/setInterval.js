console.log(1);
console.log(2);

let count = 0;
const intervalId = setInterval(() => {
    console.log(count++);
    if (count > 10) {
        clearInterval(intervalId)
    }
}, 5)

console.log(2);
console.log('interval Id', intervalId)

console.log(4);
console.log(5);