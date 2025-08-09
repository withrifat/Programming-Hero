const number = [1, 2, 3, 4, 5];
const reversed = [];
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    // reversed.push(number[i])  //add as a last element-->  push 
    // reversed.unshift(number[i])  //add as a first element-->  unshift 
    
}
// console.log(reversed);

// push --> add as a last element
//pop ---> remove last element
// shift --> remove first element
// unshift --> add first element
console.log("In a single line");

for (let i = number.length-1; i >= 0; i--) {
    reversed.push(number[i])
    
}
console.log(reversed);


console.log("Jus numbers");
for (const num of number){
    console.log(num);   
}


//
console.log("more simple way for reverse ");
number.reverse();
console.log(number);

