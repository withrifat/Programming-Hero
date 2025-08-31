const numbers= [4, 8, 2, 3, 5, 33,55,33, 22, 33, 55];

const greaterThen10 = numbers.filter(x => x > 10)
const EvenNumbers = numbers.filter(x=> x%2 === 0)
console.log(EvenNumbers);

console.log(greaterThen10);
