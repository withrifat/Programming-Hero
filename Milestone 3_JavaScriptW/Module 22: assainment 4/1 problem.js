function totalFine(fare) {
  if (typeof fare !== 'number' || fare <= 0 || isNaN(fare)) {
    return "Invalid";
  }

  const fine = fare + (fare * 0.2) + 30;
  return fine;
}
totalFine(200);     // 270
console.log(totalFine(200));

totalFine(0);       // "Invalid"
totalFine(-35);     // "Invalid"
totalFine("65");    // "Invalid"
totalFine(552);     // 552 + 110.4 + 30 = 692.4
