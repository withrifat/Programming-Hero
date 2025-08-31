# JavaScript Array Methods

## map()
- সবসময় **নতুন array return করে**।
- Original array কে modify করে না।
- যখন তোমার দরকার হয় array কে **transform** করার (মানে পরিবর্তন করে নতুন array বানানো)।

---

## forEach()
- কিছু **return করে না**।
- চাইলে original array কে modify করতে পারো।
- মূলত side effects এর জন্য ব্যবহার হয়, যেমন:
  - console.log
  - API calls
- এখানে return value দরকার হয় না।

---

## filter()
- **Condition মিললে** যেসব value true হয় সেগুলো সব নিয়ে **একটা নতুন array return করে**।
- উদাহরণ: even number filter করা।

---

## find()
- **Condition মিললে শুধু প্রথম element return করে**।
- filter এর মতো array return করে না, শুধু একটা value দেয়।

---

## reduce()
- একটা array কে নিয়ে কাজ করে শেষে **একটা single value** বানায়।
- accumulator ব্যবহার করে সব element একসাথে কমিয়ে আনে।
- Example ব্যবহার:
  - sum বের করা
  - product বের করা
  - max/min বের করা
  - array কে object এ রূপান্তর করা


# JavaScript Classes

JavaScript এ class হলো blueprint বা template যা দিয়ে objects বানানো হয়। ES6 থেকে class officially support হয়।

## Class Declaration

class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

greet() {
console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
}

const person1 = new Person("Rifat", 22);
person1.greet();

## Class Inheritance (extends)

class Student extends Person {
constructor(name, age, grade) {
super(name, age);
this.grade = grade;
}

study() {
console.log(`${this.name} is studying in grade ${this.grade}`);
}
}

const student1 = new Student("Karim", 15, 9);
student1.greet();
student1.study();

## Getters & Setters

class Circle {
constructor(radius) {
this.radius = radius;
}

get area() {
return Math.PI \* this.radius \* this.radius;
}

set setRadius(value) {
this.radius = value;
}
}

const circle = new Circle(5);
console.log(circle.area);
circle.setRadius = 10;
console.log(circle.area);

## Static Methods

class Calculator {
static add(a, b) {
return a + b;
}
}

console.log(Calculator.add(5, 10));

## Private Properties / Methods (ES2020+)

class BankAccount {
\#balance = 0;

constructor(owner) {
this.owner = owner;
}

deposit(amount) {
this.#balance += amount;
}

getBalance() {
return this.#balance;
}
}

const account = new BankAccount("Rifat");
account.deposit(1000);
console.log(account.getBalance());
