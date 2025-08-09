// array of object  --- 2 dimontional array
const numbers = [1, 2, 43, 54, 4];
const players = [{}, {}, {}];
const examMark = [
    [56,654,64,645,464,645],
    [3,4,5,6,7,8,9,1]
]
console.log(examMark[0]);
console.log(examMark[0][2]);

// change value
examMark[1][0] = "Rifat";
// delet last value
examMark[1].pop(); 
// change value
examMark[1].push(44);   //last value in last 
console.log(examMark);


console.log("Markssssssssssss");


for ( const marks of examMark ) {
    console.log(marks);
    
}