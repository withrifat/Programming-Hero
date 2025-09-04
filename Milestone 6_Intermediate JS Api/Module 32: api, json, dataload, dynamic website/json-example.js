// Module 32: API, JSON, Data Load, Dynamic Website

// 2. JSON (JavaScript Object Notation)
// JSON is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.

// Example: A simple JSON object
const jsonData = `{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "courses": [
    { "title": "History", "credits": 3 },
    { "title": "Math", "credits": 4 }
  ]
}`;

// Parsing JSON data
const parsedData = JSON.parse(jsonData);
console.log(parsedData.name); // Output: John Doe
console.log(typeof parsedData);

// Converting an object to a JSON string
const person = {
  name: "Jane Doe",
  age: 25,
  isStudent: true ,
};
const jsonString = JSON.stringify(person);
console.log(jsonString); // Output: {"name":"Jane Doe","age":25,"isStudent":true}
console.log(typeof jsonString);
