const numbers = [6, 3, 7, 8, 2, 4, 9];
console.log(numbers);
numbers.sort();
console.log(numbers);


const friends = ["Alice", "Bob", "Charlie", "Diana"];
friends.sort();
console.log(friends);

var ages = [27, 405, 33, 52, 21, 38, 60, 19, 47, 29];
console.log(ages);
ages.sort();
console.log(ages);
// this problem for js do sort like sting sorting
// there have some problem of sorting so here is a way to fix this problem 
// Ascending (ছোট থেকে বড়)
const sorted_ages = ages.slice().sort(function(a, b) {
    return a - b;
});
console.log("Ascending:", sorted_ages);

// Descending (বড় থেকে ছোট)
const sorted_ages_desc = ages.slice().sort(function(a, b) {
    return b - a;
});
console.log("Descending:", sorted_ages_desc);
