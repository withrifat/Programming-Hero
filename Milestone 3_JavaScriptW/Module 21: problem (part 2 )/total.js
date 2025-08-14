
const products = [
    { name: 'shampoo', price: 300},
    { name: 'Saban', price: 400},
    { name: 'shirt', price: 500},
    { name: 'pant', price: 1000},
]
function getShoppingTotal(products) {
    let total = 0;
    for (const product of products) {
        console.log(product);
        total += product.price;
    }
    return total;
}
console.log(getShoppingTotal(products));
