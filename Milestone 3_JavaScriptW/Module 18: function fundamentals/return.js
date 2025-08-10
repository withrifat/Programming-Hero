
// js return 
function TenTimes(number) {
    const result = number * 10;
    return result;  // return -> give an output out of function 
}


function cutHalf(number) {
    const half = number / 2;
    return half;   // when return exicute function not work after return
}

TenTimes(5);
const result = TenTimes(5);
console.log(result);
