console.log('one');
console.log('two');

// setTimeout(callThree, 5000)
setTimeout(() =>{
    console.log('new three inside set time out')
}, 4000)

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))

console.log('four');
console.log('five');

function callThree() {
    console.log('three');
}



// =======================
// 📌 Async & Await Notes
// =======================
//
// 1. async দিয়ে function বানালে সেটা সবসময় Promise return করে
// 2. await ব্যবহার করলে Promise শেষ না হওয়া পর্যন্ত অপেক্ষা করে
// 3. try...catch ব্যবহার করে error ধরা যায়
//
// Async/Await = কোডকে সহজ ও পড়তে সুবিধাজনক করে

// Example 1: Simple async function
async function sayHello() {
  return "Hello World!";
}
sayHello().then(msg => console.log(msg));

// Example 2: Using await
function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("✅ Data পাওয়া গেলো"), 2000);
  });
}

async function showData() {
  console.log("⏳ Data লোড হচ্ছে...");
  let result = await getData(); // এখানে অপেক্ষা করবে
  console.log(result);
  console.log("🎉 Done!");
}
showData();

// Example 3: Error Handling with try...catch
async function loadData() {
  try {
    let res = await fetch("https://wrong-url.com");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("❌ Error:", err.message);
  }
}
loadData();
