# Module 18: JavaScript Variables, Arrays, Objects, Data Types, Loops, and Conditions

This module covers fundamental concepts of JavaScript including variables, arrays, objects, data types, loops, and conditional statements. Below are short notes and explanations of the code from the JavaScript files in this module.

---

## `array-looping.js`

This file demonstrates how to loop through an array using a `for` loop.

### Code Snippet

```javascript
const fruits = ['apple', 'banana', 'dav', 'aanar'];
for (let i = 1; i < fruits.length; i++) {
    console.log(i);
    console.log(fruits[i]);
}

const numbers = [12, 45, 78, 24, 454, 4545, 54, 54 ,54];
for (let l = 0; l < numbers.length; l++) {
    console.log(l);
    console.log(fruits[l]);
}
```

### Explanation

The code iterates through the `fruits` and `numbers` arrays, printing the index and the element at that index for each iteration. The first loop starts from index 1, so it skips the first element of the `fruits` array. The second loop has a potential bug where it uses `fruits[l]` inside the loop for the `numbers` array, which might lead to `undefined` if the `numbers` array is longer than the `fruits` array.

---

## `arrayOFArray.js`

This file explains how to work with 2-dimensional arrays (arrays of arrays) in JavaScript.

### Code Snippet

```javascript
// array of object  --- 2 dimontional array
const examMark = [
    [56,654,64,645,464,645],
    [3,4,5,6,7,8,9,1]
]
console.log(examMark[0]);
console.log(examMark[0][2]);

// change value
examMark[1][0] = "Rifat";
// delet last value
examMark[1].pop();
// change value
examMark[1].push(44);   //last value in last
console.log(examMark);

for ( const marks of examMark ) {
    console.log(marks);
}
```

### Explanation

The code demonstrates creating a 2D array `examMark`, accessing elements, modifying elements, and using `pop` and `push` to manipulate the inner arrays. It also shows how to iterate over the outer array using a `for...of` loop.

---

## `copy.js`

This file explains different ways to copy arrays in JavaScript, including shallow and deep copies.

### Code Snippet

```javascript
// =========================================
// 2. Manual Copy (Loop based)
// =========================================
let Products = [22, 33, 44, 55, 66, 77, 99];
let Competitor = [];

for (let product of Products) {
    Competitor.push(product); // প্রতিটি item নতুন array তে যোগ
}

// =========================================
// 3. Easy & Modern Shallow Copy Methods
// =========================================
let numbers = [1, 2, 3, 4, 5];

// Method 1: Array.from()
const newNumbers = Array.from(numbers);

// Method 2: concat()
let number3 = [].concat(numbers);

// Method 3: Spread Operator
const new_number = [...numbers];

// Method 4: slice()
let number4 = numbers.slice();

// =========================================
// 5. Deep Copy (Concept & Example)
// =========================================
let deepArray = [{ price: 100 }, { price: 200 }];
let deepCopy = JSON.parse(JSON.stringify(deepArray)); // Simple deep copy method
```

### Explanation

The code shows various methods for copying arrays. It explains the problem with direct assignment (reference problem), how to manually copy an array using a loop, and modern shallow copy methods like `Array.from()`, `concat()`, the spread operator (`...`), and `slice()`. It also demonstrates a simple way to perform a deep copy using `JSON.parse(JSON.stringify())`.

---

## `object-array.js`

This file demonstrates how to work with an array of objects in JavaScript.

### Code Snippet

```javascript
const employees = [
    {name: 'ashik', designation: 'content writer', salary: 25000},
    {name: 'enamul', designation: 'developer', salary: 25000},
    {name: 'shafi', designation: 'boxer', salary: 25000},
];

// প্রথম অবজেক্টের salary প্রিন্ট
console.log(employees[0].salary);

// শেষ অবজেক্টের নাম প্রিন্ট
console.log(employees[employees.length - 1].name);

for (const em of employees) {
    console.log(em.name);
}
```

### Explanation

The code shows how to create an array of objects, access properties of objects within the array, and loop through the array to print information about each employee.

---

## `reverse.js`

This file demonstrates different ways to reverse an array in JavaScript.

### Code Snippet

```javascript
const number = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = number.length-1; i >= 0; i--) {
    reversed.push(number[i])
}
console.log(reversed);

console.log("more simple way for reverse ");
number.reverse();
console.log(number);
```

### Explanation

The code shows two ways to reverse an array. The first method uses a `for` loop to iterate through the original array in reverse order and push the elements into a new array. The second method uses the built-in `reverse()` method, which reverses the array in place.

---

## `sort.js`

This file explains how to sort arrays in JavaScript, including arrays of numbers and strings.

### Code Snippet

```javascript
const numbers = [6, 3, 7, 8, 2, 4, 9];
numbers.sort();
console.log(numbers); // [ 2, 3, 4, 6, 7, 8, 9 ]

const friends = ["Alice", "Bob", "Charlie", "Diana"];
friends.sort();
console.log(friends); // [ 'Alice', 'Bob', 'Charlie', 'Diana' ]

var ages = [27, 405, 33, 52, 21, 38, 60, 19, 47, 29];
// Ascending (ছোট থেকে বড়)
const sorted_ages = ages.slice().sort(function(a, b) {
    return a - b;
});
console.log("Ascending:", sorted_ages);

// Descending (বড় থেকে ছোট)
const sorted_ages_desc = ages.slice().sort(function(a, b) {
    return b - a;
});
console.log("Descending:", sorted_ages_desc);
```

### Explanation

The code demonstrates how to use the `sort()` method to sort arrays. For strings, it sorts alphabetically. For numbers, the default `sort()` method can produce incorrect results because it sorts based on string conversion. The code shows how to correctly sort numbers in ascending and descending order by providing a compare function to the `sort()` method.
