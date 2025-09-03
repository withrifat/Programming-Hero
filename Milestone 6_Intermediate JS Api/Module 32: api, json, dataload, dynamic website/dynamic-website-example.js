// Module 32: API, JSON, Data Load, Dynamic Website

// 4. Dynamic Website
// A dynamic website is a site that displays different content for different users or based on user interaction.
// JavaScript is used to make websites dynamic by manipulating the DOM and loading data from APIs.

// Example: A button that loads and displays new data each time it's clicked

// To make this code work, you would need an index.html file with a button with the id of 'load-data-btn' and a div with the id of 'post-container'.
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
