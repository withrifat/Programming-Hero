const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

Object.seal(employee)  // we can modify but we can't delet
// delete employee.salary
delete employee.experience  

employee.salary = employee.salary + 5000;
employee.location = 'Dhaka'
console.log(employee)