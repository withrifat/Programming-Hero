/* 
let url = 'https://example.org/products.json';  //it's just promice 
const result = fetch(url)
.then((Response)=> //for chaining function we use then
    Response.json()  // convert to json
).then((data)=> console.log(data))          
// console.log(result);


const loadPost=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res=>res.json()))
    .then((json => displayPost(json))
    )
}
const displayPost=(posts)=>{
        // for(let i = 0; i< posts.length; i++){
    //     console.log(posts[i]);
    // }
    posts.forEach(post => {
        console.log(post);
    });
}
*/

