const numbers= [4, 8, 2, 3, 5];
numbers.forEach(x => console.log(x*x))
numbers.forEach(x => {
    const doubled = x * 2;
    console.log(doubled);
})