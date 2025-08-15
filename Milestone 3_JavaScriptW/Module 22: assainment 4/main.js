function totalFine( fare ) {
  if (fare <= 0 || typeof fare != 'number' || isNaN(fare)) {
    return 'Invalid'
  }
  const withFine = fare + (fare * 0.2) +  30;
  return withFine;
}

function  onlyCharacter( str ) {
    if (typeof str !== 'string'   ) {
        return "Invalid" ;
    }
    const output = str.split(" ").join("").toUpperCase();
    return output ;
}

function bestTeam(player1, player2) {
    if (
        typeof player1 !== 'object' || player1 === null || Array.isArray(player1) ||
        typeof player2 !== 'object' || player2 === null || Array.isArray(player2)
    ) {
        return "Invalid";
    }
    const value1 = player1.foul + player1.cardY + player1.cardR;
    const value2 = player2.foul + player2.cardY + player2.cardR;
    if (value1 < value2) {
        return player1.name;
    } else if (value2 < value1) {
        return player2.name;
    } else {
        return "Tie";
    }
}

function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function resultReport(marks) {
  let total = 0;
  let passCount = 0;
  let failCount = 0;
  if (!Array.isArray(marks)) {
    return 'Invalid';
  }
  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }
  for (let mark of marks) {
    total += mark;
    if (mark >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }
  let avg = Math.round(total / marks.length);
  return {
    finalScore: avg,
    pass: passCount,
    fail: failCount,
  };
}