/* 
array has some dubplicate elements 

*/
const biriyaniKhor = [ 'abul', 'kabul', 'jabul', 'abul', 'kabul', 'jabul', 'abul', 'kabul', 'jabul' ];

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function noDublicate(arr) {
    // empty array ; 
    const unique = [] ;
    for (const item of arr) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

console.log(noDublicate(biriyaniKhor));
