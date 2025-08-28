const number = "23";
if(typeof number === "number"){
    console.log("It's a number");
}

// array object cheack 
const numbers = [2, 3, 543, 334, ];
const student = { name: "John", age: 21, grade: "A" };
console.log(Array.isArray(numbers));
console.log(typeof student === "object");


//  js nan
const notANumber = NaN;
console.log(isNaN(notANumber));
const nnAn = isNaN("68768");
console.log(nnAn);
