// 12 inch = 1 feet 
function inchFeet (inches) {
    const feet = inches / 12;
    return feet;
}
// let convertFeet = inchFeet(144);
// console.log(convertFeet); 

function inchToFeet(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12 ;  // modulo 
    const result = feetNumber + 'ft ' + inchRemaining + "inch. "
    return result;
}
console.log(inchToFeet(75));


// my own 
function feetToInch(feet) {
    const inch = feet * 12;
    const inchToStr = parseInt(inch);
    const result = "Total Inch = " +  inchToStr ;
    return result ;
}
console.log(feetToInch(5.5));

//  feet + inch to = inch
function feetInchToFeet(feet, inch) {
    let inches = (feet *12)+ inch;
    let result = "Total inch is = " + inches ;
    return result ;
}
console.log(feetInchToFeet(5, 6));

// miles to km
function milesToKm(miles) {
    let km = miles * 1.609;
    let kmInt = parseInt(km);
    let meter =  (km - kmInt) * 1000;
    let result = miles + " To km is =  " + kmInt + " and : " +meter + "  meter";
    return result ;

}
console.log(milesToKm(5));

