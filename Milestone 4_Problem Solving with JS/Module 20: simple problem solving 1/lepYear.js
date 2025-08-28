//  year will be a leap year if the year is divisible by 4
/*
this is a simple logic it is not a 100% true 
1. those year that is not divisible by 100, if the year is divisible by 4 : then it will be a lear year 
2. 
*/
function isLeapYear(year) {
    if (year % 4 === 0) {
        return true ;
    } else {
        return false;
    }
}
console.log(isLeapYear(2026));


function isLeapYear2(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear2(2025));
