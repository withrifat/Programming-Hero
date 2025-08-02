const sentence = ' I am learning Web Dev.'
// const result = '.veD --> total revarse 

// let revarse = '' ;
// for (const letter of sentence) {
//     console.log(letter);
//     revarse = letter + revarse ;
// }
// console.log(revarse);


// revarse with for loop  
// for (let i = 0; i < sentence.length; i++) {
//     console.log(i);
//     console.log(sentence[i]);  //ignore this solution
//     revarse = sentence[i] + revarse ;
    
// }
// console.log(revarse);


// Shortcut 
const reversed = sentence.split("").reverse().join('') ;  // split for make like array , reverse for make ulta , and join for make it like previous 
console.log(reversed);  
