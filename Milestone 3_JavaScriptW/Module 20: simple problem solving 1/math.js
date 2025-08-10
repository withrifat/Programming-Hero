/**
 * JavaScript Math Functions - Complete Notes
 * -----------------------------------------
 * 
 * The `Math` object in JavaScript provides built-in properties and methods
 * for mathematical constants and functions.
 * 
 * It is not a constructor, so you use it directly: Math.method()
 * 
 * Common Math properties and methods:
 * 
 * 1. Math.PI
 *    - The mathematical constant π (pi), approx. 3.14159
 * 
 * 2. Math.abs(x)
 *    - Returns the absolute value of x
 * 
 * 3. Math.round(x)
 *    - Rounds x to the nearest integer
 * 
 * 4. Math.ceil(x)
 *    - Rounds x upward to the nearest integer
 * 
 * 5. Math.floor(x)
 *    - Rounds x downward to the nearest integer
 * 
 * 6. Math.max(...values)
 *    - Returns the largest value among the given numbers
 * 
 * 7. Math.min(...values)
 *    - Returns the smallest value among the given numbers
 * 
 * 8. Math.pow(base, exponent)
 *    - Returns base raised to the power of exponent
 * 
 * 9. Math.sqrt(x)
 *    - Returns the square root of x
 * 
 * 10. Math.random()
 *     - Returns a random floating-point number between 0 (inclusive) and 1 (exclusive)
 * 
 * 11. Math.trunc(x)
 *     - Returns the integer part of x by removing any fractional digits
 * 
 * 
 * Examples and usage:
 */

// 1. Math.PI
console.log("Value of PI:", Math.PI); // 3.141592653589793

// 2. Math.abs(x)
console.log("Absolute of -7:", Math.abs(-7)); // 7

// 3. Math.round(x)
console.log("Round 4.6:", Math.round(4.6));  // 5
console.log("Round 4.4:", Math.round(4.4));  // 4

// 4. Math.ceil(x)
console.log("Ceil 4.1:", Math.ceil(4.1));   // 5

// 5. Math.floor(x)
console.log("Floor 4.9:", Math.floor(4.9));  // 4

// 6. Math.max(...values)
console.log("Max of (1, 5, 3):", Math.max(1, 5, 3)); // 5

// 7. Math.min(...values)
console.log("Min of (1, 5, 3):", Math.min(1, 5, 3)); // 1

// 8. Math.pow(base, exponent)
console.log("2^3 =", Math.pow(2, 3)); // 8

// 9. Math.sqrt(x)
console.log("Square root of 16:", Math.sqrt(16)); // 4

// 10. Math.random()
// Generate a random integer between 1 and 10
const randomInt = Math.floor(Math.random() * 10) + 1;
console.log("Random integer between 1 and 10:", randomInt);

// 11. Math.trunc(x)
console.log("Trunc 4.9:", Math.trunc(4.9)); // 4
console.log("Trunc -4.9:", Math.trunc(-4.9)); // -4


/**
 * Additional notes:
 * 
 * - Math.random() generates a floating-point number between 0 and 1 (not including 1).
 *   To generate random numbers in a range, use formulas like:
 *   
 *   Random integer between min and max (inclusive):
 *   Math.floor(Math.random() * (max - min + 1)) + min
 * 
 * - Math methods are static, so you call them directly on Math (e.g. Math.abs()), 
 *   not on number instances.
 * 
 * - These methods are useful for rounding, generating random numbers, 
 *   performing power/square root operations, and more.
 * 
 * Keep this as a quick reference for when you work with math in JavaScript!
 */
