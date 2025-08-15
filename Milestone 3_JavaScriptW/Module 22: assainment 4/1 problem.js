// function totalFine(fare) {
//   if (typeof fare !== 'number' || fare <= 0 || isNaN(fare)) {
//     return "Invalid";
//   }

//   const fine = fare + (fare * 0.2) + 30;
//   return fine;
// }
// totalFine(200);     
// console.log(totalFine(200));




function totalFine( fare ) {
  if (fare <= 0 || typeof fare != 'number' || isNaN(fare)) {
    return 'Invalid'
  }
  const withFine = fare + (fare * 0.2) +  30;
  return withFine;
}
console.log(totalFine());

