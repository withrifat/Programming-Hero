const numbers= [4, 8, 2, 3, 5, 33,55,33, 22, 33, 55,16];

let sum = 0 ;
for( const num of numbers) {
    sum = sum+ num;
}
const total = numbers.reduce((accululator, current) => accululator + current )

console.log(sum);
console.log(total);

