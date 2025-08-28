// Array of array
const numbers = [1, 2, 43, 54, 4];
const players = [{}, {}, {}];
const employees = [
    {name: 'ashik', designation: 'content writer', salary: 25000},
    {name: 'enamul', designation: 'developer', salary: 25000},
    {name: 'shafi', designation: 'boxer', salary: 25000},
];

// প্রথম অবজেক্ট প্রিন্ট
console.log(employees[0]);

// প্রথম অবজেক্টের salary প্রিন্ট
console.log(employees[0].salary);

// শেষ অবজেক্টের নাম প্রিন্ট
console.log(employees[employees.length - 1].name);

for (const em of employees) {
    console.log(em.name);
    
}
console.log("nexttttttttt");
for (const emp of employees) {
    const personInfo = emp.name + `:  ` + emp.salary;
    console.log(personInfo);
}

// name change 
employees[0].name = 'Rifat';
console.log(employees[0]);


