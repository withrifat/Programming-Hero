const person = {
    name : 'Sondor undding ' ,
    age: 25 ,
    profession: 'developer' ,
    married : true,

    'fav place': ['bangdorban', 'kuakata']  //for using space in key so i should use quotation 
}

console.log(person);
// Data access by dot-notation  --> by symbol access  value

console.log(person.name);
let profession = person.profession;
console.log(profession);

// bracket notation  --> Using third bracket 
console.log(person['age']);
const boyos = person['age'] ;
console.log(boyos);

console.log(person["fav place"]);  //this is the only way to access this type of key's value 



const keyName = 'profession' ;
console.log(person[keyName]);
