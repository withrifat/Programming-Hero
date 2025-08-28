
//  1. parent node
const mainContainer = document.getElementById('mainContainer');
console.log(mainContainer);

// create child node
const placeSection = document.createElement('section');

//  create h1 
const h1 = document.createElement('h1');
h1.innerText = "Places to visit";
placeSection.appendChild(h1);
// create ul 
const ul = document.createElement('ul');
ul.innerHTML = `
    <li>Paris</li>
    <li>London</li>
    <li>New York</li>
    <li>Tokyo</li>
`;
placeSection.appendChild(ul);

// 3. append places to the main container
mainContainer.appendChild(placeSection);