function add(a, b){
    console.log(arguments);  // array like object 
    const params = [ ...arguments]
    console.log(...params);
    
}
add(88,77,455,34)