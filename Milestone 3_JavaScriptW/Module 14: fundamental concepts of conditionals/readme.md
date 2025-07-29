# JavaScript Conditionals & Comparison Operators

## 1. Compare Variables and Comparison Operators
Comparison operators are used to compare two values. They return a boolean (`true` or `false`).

| Operator | Description         | Example           | Result      |
|----------|---------------------|-------------------|-------------|
| `==`     | Equal to            | `5 == '5'`        | `true`      |
| `===`    | Strict equal to     | `5 === '5'`       | `false`     |
| `!=`     | Not equal to        | `5 != 3`          | `true`      |
| `!==`    | Strict not equal    | `5 !== '5'`       | `true`      |
| `>`      | Greater than        | `7 > 5`           | `true`      |
| `<`      | Less than           | `3 < 8`           | `true`      |
| `>=`     | Greater or equal    | `6 >= 6`          | `true`      |
| `<=`     | Less or equal       | `4 <= 5`          | `true`      |

**Example:**
```js
let a = 10;
let b = 20;
console.log(a < b); // true
```

---

## 2. Introduction to Conditionals
Conditionals allow you to execute code based on certain conditions.

**Example:**
```js
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
```

---

## 3. If-Else Statement Visualization
The `if-else` statement chooses between two paths.

**Example:**
```js
let score = 45;
if (score >= 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}
```

---

## 4. Conditional Branching (If-Else Condition)
You can branch your logic using multiple `if-else` statements.

**Example:**
```js
let temp = 30;
if (temp > 35) {
  console.log("Hot");
} else if (temp > 20) {
  console.log("Warm");
} else {
  console.log("Cold");
}
```

---

## 5. Multiple Condition Logical Operators (`&&`, `||`)
Use logical operators to check multiple conditions.

- `&&` (AND): All conditions must be true.
- `||` (OR): At least one condition must be true.

**Example:**
```js
let age = 25;
let hasTicket = true;
if (age >= 18 && hasTicket) {
  console.log("Allowed entry");
}
```

---

## 6. Multi-Level If-Else Condition
You can nest multiple `if-else` statements for complex logic.

**Example:**
```js
let marks = 85;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}
```

---

## 7. Nested If-Else Condition
`if-else` statements can be nested inside each other.

**Example:**
```js
let user = "admin";
let password = "1234";
if (user === "admin") {
  if (password === "1234") {
    console.log("Access granted");
  } else {
    console.log("Wrong password");
  }
} else {
  console.log("Unknown user");
}
```

---

## 8. If-Else Shorthand (Ternary Operator)
The ternary operator is a shorthand for `if-else`.

**Syntax:** `condition ? valueIfTrue : valueIfFalse`

**Example:**
```js
let isMember = true;
let price = isMember ? 100 : 150;
console.log(price); // 100
```

---

## 9. Advanced Logical NOT Operator (`!`)
The NOT operator reverses a boolean value.

**Example:**
```js
let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Please log