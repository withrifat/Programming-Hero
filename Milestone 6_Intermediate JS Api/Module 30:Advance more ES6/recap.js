// var let const
const tax = 5000;
let eta = 5;
eta = 2

const student = { name: 'nayeem', marks: 50 }
const friends = ['abul', 'babul', 'cabuk']

// default parameter
function add(num1, num2 = 0) {

}

// template string
const dynamicText = `My Tax: ${tax} and marks ${student.marks * 1.2} has friend: ${friends[1]}`;

const innerHTML = `
<div>
    <h1>Hello: ${friends.length}</h1>
    <p></p>
</div>
`

// arrow function
const add2 = (num1, num2 = 0) => num1 + num2;
const tenTimes = x => x * 10;

// spread
const newFriends = [...friends, 'dabul', 'ebul']

// destructuring
const { marks: totalMarks, age = 0 } = student;  // change the marks value by totalMarks
console.log(totalMarks, age)
let marks = Object.keys(student);
console.log(marks);
console.log(student.marks)
const [firstFriend] = friends;
console.log(friends);
