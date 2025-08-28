// =========================================
//  Array Copy in JavaScript
// =========================================

// =========================================
// 1. Reference Problem (Direct Assignment)
// =========================================
let products = [22, 33, 55, 66];
let competitor = products; // SAME reference

competitor[0] = 100; // Competitor price পরিবর্তন করলে মূল products ও পরিবর্তন হবে

console.log("Original Products:", products);     // [100, 33, 55, 66]
console.log("Competitor Products:", competitor); // [100, 33, 55, 66]

// Explanation:
// Direct assignment => Same reference in memory
// Change in one variable affects the other.


// =========================================
// 2. Manual Copy (Loop based)
// =========================================
let Products = [22, 33, 44, 55, 66, 77, 99];
let Competitor = [];

for (let product of Products) {
    Competitor.push(product); // প্রতিটি item নতুন array তে যোগ
}

console.log("Products (manual copy):", Products);
console.log("Competitor (manual copy):", Competitor);


// =========================================
// 3. Easy & Modern Shallow Copy Methods
// =========================================
let numbers = [1, 2, 3, 4, 5];

// Method 1: Array.from()
const newNumbers = Array.from(numbers);

// Method 2: concat()
let number3 = [].concat(numbers);

// Method 3: Spread Operator
const new_number = [...numbers];

// Method 4: slice()
let number4 = numbers.slice();

newNumbers.push(8); // শুধু newNumbers পরিবর্তিত হবে

console.log("Original numbers:", numbers);
console.log("newNumbers (Array.from):", newNumbers);
console.log("number3 (concat):", number3);
console.log("new_number (spread):", new_number);
console.log("number4 (slice):", number4);


// =========================================
// 4. Shallow Copy (Concept & Example)
// =========================================
// Definition:
// Shallow copy means: outer array/object আলাদা হয়,
// কিন্তু nested object/array এর reference একই থাকে।

let shallowArray = [{ price: 100 }, { price: 200 }];
let shallowCopy = [...shallowArray]; // Shallow copy

shallowCopy[0].price = 999; // Shallow copy তে পরিবর্তন করলে আসল array এর objectও পরিবর্তিত হবে

console.log("Shallow Original:", shallowArray); // [{price: 999}, {price: 200}]
console.log("Shallow Copy:", shallowCopy);      // [{price: 999}, {price: 200}]


// =========================================
// 5. Deep Copy (Concept & Example)
// =========================================
// Definition:
// Deep copy means: নতুন array/object তৈরি হয়,
// এবং nested object/array এরও আলাদা কপি হয়।
// ফলে পরিবর্তন করলে আসল data প্রভাবিত হবে না।

let deepArray = [{ price: 100 }, { price: 200 }];
let deepCopy = JSON.parse(JSON.stringify(deepArray)); // Simple deep copy method

deepCopy[0].price = 555; // Deep copy পরিবর্তিত হবে, কিন্তু মূল array অপরিবর্তিত থাকবে

console.log("Deep Original:", deepArray); // [{price: 100}, {price: 200}]
console.log("Deep Copy:", deepCopy);      // [{price: 555}, {price: 200}]

// Note:
// JSON method এর সীমাবদ্ধতা:
// 1. function copy হয় না
// 2. undefined copy হয় না
// 3. Date object string এ রূপান্তরিত হয়

// =========================================
// Summary:
// - Direct assignment => Same reference
// - Shallow copy => শুধুমাত্র outer layer নতুন হয়
// - Deep copy => সম্পূর্ণ independent copy
// =========================================
