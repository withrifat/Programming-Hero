// const section = document.getElementsByTagName('section');
const section = document.querySelectorAll('section');
// for(const sections of section) {
//     console.log(sections);
//     sections.style.border = '2px solid blue';
//     sections.style.margin = '20px';
//     sections.style.padding = '10px';
//     sections.style.borderRadius = '5px';
// }
// console.log(section);


// dynamic class 
for(const section of sections) {
    section.classList.add('section-card');
}

const players = document.getElementById('players-container').childNodes;
players.forEach(player => {
    player.classList.add('player-card');
});
console.log(players);
