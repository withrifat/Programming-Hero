// api call for image calling
const Image = () => {
  const result = fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
//  api call for data
const loadPost = () => {
  const result = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      displayPosts(data);
    });
};
// received --> array of object
const displayPosts = (posts) => {
  // get the container and empty the container
  const postContainer = document.getElementById('postContainer');
  postContainer.innerHTML = '';
  posts.forEach((post) => {
    console.log(post);
    // create HTML  element
    const postCard = document.createElement('div');
    // postCard.innerText = post.title;
    postCard.innerHTML = `
            <div class="card w-96 bg-base-100 card-xs shadow-sm">
                <div class="card-body">
                    <h2 class="card-title">${post.title}</h2>
                    <p class=" text-justify">${post.body}</p>
                </div>
            </div>
        `;
    // add div into container
    postContainer.appendChild(postCard);
  });
};
