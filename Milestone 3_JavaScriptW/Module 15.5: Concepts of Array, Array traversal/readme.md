# JavaScript Arrays

## What is an Array?
An **array** is a special variable in JavaScript that can hold multiple values in a single variable. Arrays are used to store lists of items, such as numbers, strings, or even other arrays. Each item in an array has a numbered position called an **index**, starting from 0.

**Example:**
```js
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple
```

---

## Creating Arrays
You can create arrays using square brackets `[]`:

```js
let numbers = [10, 20, 30, 40];
let names = ["Alice", "Bob", "Charlie"];
```

---

## Accessing Array Elements
Access elements by their index (starting from 0):

```js
let colors = ["Red", "Green", "Blue"];
console.log(colors[1]); // Output: Green
```

---

## Adding Data to Arrays

- **Push:** Adds an item to the end of the array.
    ```js
    let animals = ["Dog", "Cat"];
    animals.push("Rabbit");
    // animals = ["Dog", "Cat", "Rabbit"]
    ```
- **Unshift:** Adds an item to the beginning of the array.
    ```js
    animals.unshift("Horse");
    // animals = ["Horse", "Dog", "Cat", "Rabbit"]
    ```

---

## Removing Data from Arrays

- **Pop:** Removes the last item from the array.
    ```js
    animals.pop();
    // animals = ["Horse", "Dog", "Cat"]
    ```
- **Shift:** Removes the first item from the array.
    ```js
    animals.shift();
    // animals = ["Dog", "Cat"]
    ```

---

## Array Length
Get the number of items in an array using `.length`:

```js
let cities = ["Dhaka", "Chittagong", "Khulna"];
console.log(cities.length); // Output: 3
```

---

## Traversing Arrays (Looping)
You can loop through arrays using `for` loops or `for...of`:

```js
let scores = [80, 90, 70];
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

// Using for...of
for (let score of scores) {
  console.log(score);
}
```

---

## Useful Array Tips & Tricks

- **Find Index:** Use `indexOf()` to find the position of an item.
    ```js
    let index = fruits.indexOf("Banana"); // Output: 1
    ```
- **Check Existence:** Use `includes()` to check if an item exists.
    ```js
    let hasApple = fruits.includes("Apple"); // Output: true
    ```
- **Join Array:** Use `join()` to convert an array to a string.
    ```js
    let fruitString = fruits.join(", "); // Output: "Apple, Banana, Cherry"
    ```
- **Slice Array:** Use `slice()` to get a part of the array.
    ```js
    let someFruits = fruits.slice(1, 3); // Output: ["Banana", "Cherry"]
    ```

---

## Practice Notes

1. **Create an array of your favorite foods.**
2. **Add a new food to the end and beginning of the array.**
3. **Remove the last food from the array.**
4. **Print all foods using a loop.**
5. **Check if a specific food exists in your array.**

**Example Practice:**
```js
let foods = ["Pizza", "Burger", "Pasta"];
foods.push("Sushi");
foods.unshift("Salad");
foods.pop();
for (let food of foods) {
  console.log(food);
}
console.log(foods.includes("Burger")); // true
```

---

> **Tip:** Arrays are powerful for managing lists of data. Learn to use array methods to make your code cleaner and more