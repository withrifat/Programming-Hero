const student = {
    name: 'Rafid',
    1: 50,
    family: {
        title: 'bhuiya',
        mother: {
            name: "begom",
            age:45
        },
    },
   'home-address': 'kochu khet',
    marks: 90
}
// console.log(student.family.title);
console.log(student.family.mother.name , student.family.mother?.age);
// if there don't have value then we can use oftional breack like this 
console.log(student.family.mother.name , student.family.father?.age);

