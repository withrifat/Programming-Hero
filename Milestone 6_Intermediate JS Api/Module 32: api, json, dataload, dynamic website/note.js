// Module 32: API, JSON, Data Load, Dynamic Website

// 1. API (Application Programming Interface)
// An API is a set of rules that allows different software applications to communicate with each other.
// Web APIs are typically used to fetch data from a server.

// Example: Fetching data from a simple API
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
*/

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

// Converting an object to a JSON string
const person = {
  name: "Jane Doe",
  age: 25,
  isStudent: true,
};
const jsonString = JSON.stringify(person);
console.log(jsonString); // Output: {"name":"Jane Doe","age":25,"isStudent":true}

// 3. Data Loading
// Data is often loaded from a server using the fetch() API.

// Example: Loading user data and displaying it on the page
/*
function loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data));
}

function displayUsers(users) {
  const userContainer = document.getElementById('user-container');
  for (const user of users) {
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>Website: ${user.website}</p>
    `;
    userContainer.appendChild(userDiv);
  }
}

loadUsers();
*/

// 4. Dynamic Website
// A dynamic website is a site that displays different content for different users or based on user interaction.
// JavaScript is used to make websites dynamic by manipulating the DOM and loading data from APIs.

// Example: A button that loads and displays new data each time it's clicked
/*
document.getElementById('load-data-btn').addEventListener('click', function() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      const postContainer = document.getElementById('post-container');
      postContainer.innerHTML = ''; // Clear previous posts
      for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
          <h4>${post.title}</h4>
          <p>${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
      }
    });
});
*/
