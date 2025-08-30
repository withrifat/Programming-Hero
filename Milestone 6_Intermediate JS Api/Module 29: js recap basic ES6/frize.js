const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

// Object.freeze(employee)
// delete employee.salary
delete employee.experience

employee.salary = employee.salary + 5000;
employee.location = 'Dhaka'
console.log(employee)
