function delayedGreeting(name, delay) {
  setTimeout(() => {
    console.log(`Hello, ${name}! 👋`);
  }, delay);
}

delayedGreeting("Rifat", 3000);