/* 
chair -- > 3 cft 
table--- > 10 cft
bed -- > 50cft
*/

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;

    const totalChairWood = chairWood * chairQuantity ;
    const totalTableWood = tableWood * tableQuantity ;
    const totalBedWood = bedWood * bedQuantity ;

    const totalWood = totalChairWood + totalTableWood + totalBedWood ;
    return totalWood ;
}
let wood = woodQuantity(2, 4, 5);
console.log(wood);
