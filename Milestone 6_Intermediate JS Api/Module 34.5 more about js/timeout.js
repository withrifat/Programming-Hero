console.log(1);
console.log(2);

const timeOutId = setTimeout(() => {
    console.log(3);
}, 5000)
const timeOutId2 = setTimeout(() => {
    console.log(33);
}, 5000)

console.log('timoutId', timeOutId, timeOutId2)

console.log(4);

console.log(5);