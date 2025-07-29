// multi level condition
// const price = 3000;
// if (price >= 5000) {
//   const discount = (price * 10) / 100;
//   console.log('You got discount is = ' + discount);
//   const npay = price - discount;
//   console.log('You need to pay' + npay);
// } else if (price > 2500) {
//   const discount = (price * 5) / 100;
//   const npay = price - discount;
//   console.log('You need to pay' + npay);
// } else {
//   console.log('you need you pay' + price);
// }


const age = 15;
if (age <= 18){
    console.log("You donn't need to pay ")
} else if (age <= 50){
    const pay = 100/5 ;
    console.log("You have a discount of = " + pay);
} else {
    console.log("You need to full pay ");
}