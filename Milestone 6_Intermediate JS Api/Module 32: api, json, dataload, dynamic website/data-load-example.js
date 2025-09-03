// Module 32: API, JSON, Data Load, Dynamic Website

// 3. Data Loading
// Data is often loaded from a server using the fetch() API.

// Example: Loading user data and displaying it on the page

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

// To make this code work, you would need an index.html file with a div with the id of 'user-container'.
// loadUsers();
