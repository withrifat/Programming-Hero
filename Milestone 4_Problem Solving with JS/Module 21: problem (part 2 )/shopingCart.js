

const products = [
    { name: 'shampoo', price: 300, quantity: 12},
    { name: 'Saban', price: 400, quantity: 5},
    { name: 'pant', price: 1000, quantity: 8},
    { name: 'shirt', price: 500, quantity: 10},
]
function cartTotal(products) {
    let total = 0;
    for (const product of products) {
        total += product.price * product.quantity;
    }
    return total;
}   
console.log("Total cart value: " + cartTotal(products));
