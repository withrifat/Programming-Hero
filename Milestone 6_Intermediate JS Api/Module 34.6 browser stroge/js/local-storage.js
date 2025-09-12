const addNumberToLS = () => {
    const number = Math.ceil(Math.random() * 100)
    console.log(number);
    localStorage.setItem('number', number)
}

const setObjectToLS = () => {
    const customer = { name: 'rohim khalu', products: 3, price: 75 }
    const customerJSON = JSON.stringify(customer)  // make object to json
    localStorage.setItem('customer', customerJSON);

}

const readObjectFromLS = () =>{
    const customerJSON = localStorage.getItem('customer')
    const customer = JSON.parse(customerJSON) // parse => json to object 
    console.log(customer.name)
}
const getNumberFromLS = () => {
    const number = localStorage.getItem('number');
    console.log('from saved local storage', number)
}