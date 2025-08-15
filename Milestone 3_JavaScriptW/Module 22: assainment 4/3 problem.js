let strOne = { name: "Argentina", foul: 2, cardY: 1, cardR: 0 };
let strTwo = { name: "Brazil", foul: 5, cardY: 1, cardR: 7 };
let strThree = { name: "Japan", foul: 4, cardY: 8, cardR: 3 };

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

console.log(bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
{ name: "Argentina", foul: 7, cardY: 0, cardR: 0 }));
console.log(bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
{ name: "Sweden", foul: 7, cardY: 4, cardR: 1 }));
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
{ name: "France", foul: 10, cardY: 2, cardR: 1 }));
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"));


