let num = 0; //loop variable
while(num < 5) { // loop condition
    console.log(num); //loop statement
    num++; //loop variable change
}
console.log("End first part");
// for(first part: second part: third part) {
// for(loop variable diclaration ; loop condition ; ) {}
//     loop statement
// }
// for(let num = 0; num <5; num++){
//     console.log(num);
// }
// for (let i = 0; i <=160000000 ; i++) {
//     console.log("I love you  " + i);
// }


// একটি নির্দিষ্ট সংখ্যা থেকে আরেকটি সংখ্যার যোগফল নির্ণয় 
let sum = 0;
for (let i = 11; i <= 20 ; i++) {
    sum = sum + i;
    console.log(i);  
}
console.log('sum of number from 11 to 20 is ', sum);

// odd numbers.................................
//both are same
for (let i = 0; i < 20; i++) {
    if (i%2 === 1) {
        console.log(i);
    }
}
for (let i = 0; i < 20; i++) {
    if (i%2 !== 0) {
        console.log(i);
    }
}
console.log("End of odd number");

//both are same 
// ............................................
// even number 
for (let i = 0; i < 30; i++) {
    if (i%2 === 0) {
        console.log("even number", i);
        
    }
    
}
console.log("End of even number ");
// list of numbers 1 to 30 divisible by 5
for (let i = 0; i < 30; i++) {
    if (i%5 === 0) {
        console.log("divisible by 5 is = ",i);
    } 
}
// list of number 1 to 30 divisible by 5 and 3 
for (let i = 0; i < 30; i++) {
    if (i%5 === 0 || i%3 === 0) {
        console.log("divisible by 5 or 3 is = ",i);
    }
    // console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
    
    if (i% 2 === 0) {
        console.log("Divided by 2 ", i);
        
    }
}
console.log("End.....................................................................");

// give me the sum of numbers from 1 to 20 that are divisible by 3
let total = 0;
for (let i = 0; i < 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
        total = total + i ;
        console.log("total is = ", total);
        
    }
    
}
console.log(`Total of the number is ${total}`);
