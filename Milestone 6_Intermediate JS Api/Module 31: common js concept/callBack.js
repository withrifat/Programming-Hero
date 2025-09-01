// callback
function pakhiBhai(callMeBack, patro, patri) {
    // console.log('value of patro', patro)
    // console.log('callMebAck parameter', callMeBack)
    if (patri == true) {
        // console.log(callMeBack)
        callMeBack(patro)
    } else if (patri == false) {
        console.log('tor kopale biya nai')
    }
}

function callSomeOne(person) {
    console.log('calling', person)
}

// callSomeOne('jodu')
pakhiBhai(callSomeOne, 'jodu', false)


// myBtn.addEventListener('click', () =>{

// })
// const addFive = x => x + 5
// [1, 2, 3, 5].map(addFive)