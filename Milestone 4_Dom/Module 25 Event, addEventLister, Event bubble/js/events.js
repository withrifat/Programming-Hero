// first way
function handleClick() {
    alert("Button clicked!");
}

// second way
function makeYellow() {
    document.body.style.backgroundColor = "yellow";
}
function makeRed(){
    document.body.style.backgroundColor = "red";
}
// third way
const btnMakeBlue = document.getElementById("btnMakeBlue");
// btnMakeBlue.addEventListener("click", function() {
//     document.body.style.backgroundColor = "blue";
// });
btnMakeBlue.onclick = function() {
    document.body.style.backgroundColor = "blue";
};  

const btnMakePurple = document.getElementById("btnMakePurple");
btnMakePurple.onclick = function() {
    document.body.style.backgroundColor = "purple";
};


// fourth way 
document.getElementById('btnMakeGreen').addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = "green";
});

document.getElementById('btnMakeGold').addEventListener('click', function makeGold(){
    document.body.style.backgroundColor = 'goldenroad';
})