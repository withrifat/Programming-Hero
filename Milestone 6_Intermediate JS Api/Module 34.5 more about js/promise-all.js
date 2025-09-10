const getData1 = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log('generated num1', num)
    if (num > 1) {
        resolve({ num1: num })
    }
    else {
        reject({ err: 'Data is not available1' })
    }
});
const getData2 = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log('generated num2', num)
    if (num > 1) {
        resolve({ num1: num })
    }
    else {
        reject({ err: 'Data is not available2' })
    }
});
const getData3 = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log('generated num3', num)
    if (num > 1) {
        resolve({ num1: num })
    }
    else {
        reject({ err: 'Data is not available1' })
    }
});

Promise.all([getData1, getData2, getData3])
    .then(res => console.log(res))
    .catch(error => console.log(error))