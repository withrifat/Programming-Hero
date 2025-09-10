function one() {
    two()
    console.log(1);
}
function two() {
    three()
    console.log(2);
}
function three() {
    setTimeout(() => {
        console.log('inside three timeout', 4)
    }, 4000)
    four()
    console.log(3);
}
function four() {
    five()
    console.log(4);
}
function five() {
    setTimeout(() =>{
        console.log('inside timeout 5')
    }, 0)
    console.log(5);
}

one();