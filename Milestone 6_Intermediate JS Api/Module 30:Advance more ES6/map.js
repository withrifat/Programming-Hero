const numbers= [4, 8, 2, 3, 5]
// const double = []
// for(const number of numbers){
//     const result = number* 2;
//     double.push(result);
// }
// const doubleIT = x => x*2;
// const doubled = numbers.map(doubleIT)
const doubled = numbers.map(x => x*2);
const fiveTimes = numbers.map(x => x*5);
const squared = numbers.map(x => x*x);
console.log(fiveTimes);
console.log(squared);

console.log(doubled);

const friends = ['zaved', 'pavel', 'novel', 'kavel']
const nameLeangths = friends.map(name => name.length)
const firstLetter = friends.map(name => name[0].toUpperCase());
console.log(nameLeangths);
console.log(firstLetter);
const result = numbers.map((num, index) => {
    return(num*index);
})
console.log(result);
