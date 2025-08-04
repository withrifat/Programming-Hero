const person = {
    name : 'Sondor undding ' ,
    age: 25 ,
    profession: 'developer' ,
    married : true,
    salary: 25000,
    'fav place': ['bangdorban', 'kuakata']  //for using space in key so i should use quotation 
}
// that's way we can change value
person.salary = 400000;
person['age'] = 33;
console.log(person);

const propName = 'profession' ;
person[propName] ='devops'
console.log(person);
