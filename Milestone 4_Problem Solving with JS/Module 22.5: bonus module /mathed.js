const products = [
    {id: 1 , name: 'i phone', price: 12000},
    {id: 2 , name: 'macbook', price: 120000},
    {id: 3 , name: 'samsung phone', price: 12000},
    {id: 4 , name: 'xiaomi phone', price: 4353},
    {id: 5 , name: 'nokia phone', price: 12000},
    {id: 6 , name: 'oneplus phone', price: 15000},
    {id: 7 , name: 'google phone', price: 10000},
];
// for (let index = 0; index < products.length; index++) {
//     const element = products[index];
//    console.log(element);
// }
for (const product of products) {
    console.log(product);
}

function matchedProducs(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
    
}
console.log(matchedProducs(products, 'phone'));
