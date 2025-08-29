function sum(num1, num2) {  // num1, num 2 parameter 
    const total = num1 + num2;
    console.log(total);
}
// sum(10,20) //argument s
function sum(num1, num2) {  // num1, num 2 parameter 
    const total = num1 + num2;
    console.log(total);
}
// sum(10) //argument  kom dile undefined NaN output show hobe


// es6 default parameter 
function summ(num1, num2 = 0) {  // we can add default parametr 
    const total = num1 + num2;
    console.log(total);
}
summ(10);

/* 
we can use default parameter in function for some reason or lower argument then default parameter recommended 
add, substract --> 0
multiply  --> 1
string --> "empty string "
*/