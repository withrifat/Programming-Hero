/*
multi line discount
first 100 --> 100
101 to 200 --> 90 
above 200 --> 70

 */
function layerdDiscount(quantity) {
    const in100 = 100;
    const in200 = 90;
    const up200 = 70;
    if (quantity <= 100) {
        const total = quantity * in100;
        return total;
    } else if (quantity <= 200)  {
        const first100 = 100 * in100;
        const remaning = quantity - 100;
        const totalRemaing = remaning * in200;
        const total = totalRemaing  + first100;
        return total;
    } else {
        const first100 = 100 * in100;
        const second100 = 100 * in200;
        const totalRemaing = quantity - 200;
        const remaning = totalRemaing * up200;
        const total = first100 + second100 + remaning;
        return total;
    }
}
console.log(layerdDiscount(0));
console.log(layerdDiscount(150));
console.log(layerdDiscount(250));