const friends = ['balakm', 'kalam', 'salam', 'balakm', 'kalam', 'salam']


// here is includes method are case sensitive to
console.log(friends.includes('kalam')); // true
console.log(friends.includes('Ghumailam')); // false
console.log(friends.includes('salam', 2)); // true, starts checking from index 2
console.log(friends.includes('balakm', 4)); // false, starts checking from index 4

// index Of method
console.log(friends.indexOf('kalam')); // 1, first occurrence
console.log(friends.indexOf('salam')); // 2, first occurrence
console.log(friends.indexOf('Ghumailam')); // -1, not found

// isArray method for checking if a variable is an array
const nums = [];
const food = ' ros a gol l a' ;
console.log(Array.isArray(friends)); // true
console.log(Array.isArray(nums)); // true
console.log(Array.isArray(food)); // false, not an array

// join method to convert array to string
const joinedFriends = friends.join(', ');
console.log(joinedFriends); // "balakm, kalam, salam, balakm, kalam, salam"
console.log(joinedFriends.length); // 44, length of the joined string

// concat method to merge arrays
const moreFriends = ['Ghumailam', 'Rohim', 'Shakib'];
const allFriends = friends.concat(moreFriends);
console.log(allFriends); // ['balakm', 'kalam', 'salam', 'balakm', 'kalam', 'salam', 'Ghumailam', '

//slice array 
const country = ['Bangladesh', 'India', 'Pakistan', 'Nepal', 'Bhutan'];
const slicedCountry = country.slice(1, 4); // from index 1 to
// index 4 (not inclusive)
console.log(slicedCountry); // ['India', 'Pakistan', 'Nepal']
console.log(country); // original array remains unchanged



// spice method to add or remove elements
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 6, 7); // at index 2
console.log(numbers); // [1, 2, 6, 7, 4, 5]