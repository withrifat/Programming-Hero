/* 
below 0 to 100: -->  100;
more than 101-200: ---> 90
more than 200: ---> 70
*/
function discountPrice(Quantity) {
    if (Quantity <= 100) {
        const total = Quantity * 100;
        return total ;
    } else if (Quantity <= 200) {
        const total = Quantity * 90;
        return total;
    } else {
        const total = Quantity * 70;
        return total;
    }
}
console.log(discountPrice(200));
console.log(discountPrice(250));
