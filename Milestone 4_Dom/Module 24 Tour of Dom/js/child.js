// document.createElement('div');

document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode.insertBefore(document.createElement('div'), document.getElementById('players-container').childNodes[3]);;
const newChild = document.createElement('div');
newChild.innerText = "This is a new Div";

// find the parent wher will add the child
const playerlist = document.getElementById('players-container');


// append the child to the parent 
