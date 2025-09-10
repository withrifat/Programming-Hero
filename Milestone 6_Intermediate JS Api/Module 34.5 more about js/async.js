console.log('one');
console.log('two');

// setTimeout(callThree, 5000)
setTimeout(() =>{
    console.log('new three inside set time out')
}, 4000)

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))

console.log('four');
console.log('five');

function callThree() {
    console.log('three');
}