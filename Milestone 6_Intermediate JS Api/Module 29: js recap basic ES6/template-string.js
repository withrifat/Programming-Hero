/*
===============================
   Template String (ES6)
===============================

👉 Template String (বা Template Literal) হলো JavaScript এর একটি নতুন feature
   যেটা দিয়ে string এর সাথে variable, expression, multi-line ইত্যাদি খুব সহজে ব্যবহার করা যায়।

👉 Syntax:
   `string text ${expression} string text`

===============================
   Key Features
===============================
1. Backtick (`` ` ``) দিয়ে string declare করতে হয়।
2. Variable / Expression embed করার জন্য ${ } ব্যবহার করতে হয়।
3. Multi-line string লেখা সহজ হয়।
4. Function call এর resultও embed করা যায়।

*/

// -------------------------
// Example 1: সাধারণ String + Variable
// -------------------------
let name = "Rifat";
let age = 21;
let text = `My name is ${name} and I am ${age} years old.`;
console.log(text); 
// Output: My name is Rifat and I am 21 years old.


// -------------------------
// Example 2: Expression এর ভিতরে
// -------------------------
let a = 10;
let b = 5;
let result = `The sum is ${a + b}`;
console.log(result); 
// Output: The sum is 15


// -------------------------
// Example 3: Multi-line String
// -------------------------
let message = `Hello Rifat,
Welcome to JavaScript world!
Enjoy coding.`;
console.log(message);
/*
Output:
Hello Rifat,
Welcome to JavaScript world!
Enjoy coding.
*/


// -------------------------
// Example 4: Function Call এর সাথে
// -------------------------
function greet(name) {
  return `Hello, ${name}! Welcome Back.`;
}
console.log(greet("Rifat")); 
// Output: Hello, Rifat! Welcome Back.


// -------------------------
// Example 5: HTML Template বানানো
// -------------------------
let title = "JavaScript Note";
let description = "Template string makes coding easier!";

let html = `
  <div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
  </div>
`;

console.log(html);
/*
Output:
  <div class="card">
    <h2>JavaScript Note</h2>
    <p>Template string makes coding easier!</p>
  </div>
*/


/*
===============================
   Shortcut Summary
===============================
✔ Backtick ব্যবহার করতে হবে (`` ` ``)
✔ ${variable} → variable/embed করার জন্য
✔ ${expression} → calculation embed করা যায়
✔ Multi-line লেখা যায়
✔ HTML dynamic ভাবে তৈরি করা যায়
*/
