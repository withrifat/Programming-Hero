// tellJoke() function
function tellJoke() {
  // প্রতি ২ সেকেন্ডে জোকস দেখাবে
  const intervalId = setInterval(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => {
        console.log(`😂 ${data.setup} - ${data.punchline}`);
      })
      .catch(err => console.log("Failed to load joke:", err));
  }, 2000);

  // ১০ সেকেন্ড পর interval বন্ধ করবে
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("⏹️ Joke telling stopped after 10 seconds!");
  }, 10000);
}

// ফাংশন কল
tellJoke();
