// API URL
const url = "https://jsonplaceholder.typicode.com/posts";

// API থেকে ডাটা আনা
fetch(url)
  .then(response => response.json())  // response কে JSON এ রূপান্তর
  .then(data => {
    console.log(data);  // সব ডাটা দেখাবে
    console.log(data[0].title); // শুধু প্রথম post এর title দেখাবে
  })
  .catch(error => {
    console.error("Error:", error);  // যদি কোনো সমস্যা হয়
  });
