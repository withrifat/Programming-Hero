const mobile =  [
    {name: 'samsung', price: 10000000, camera: '52mp', color:'black'},
    {name: 'oppo', price: 5000, camera: '12mp', color:'black'},
    {name: 'reailme', price: 5000, camera: '12mp', color:'black'},
    {name: 'oneplus', price: 500000, camera: '12mp', color:'black'},
    {name: 'apple', price: 200000, camera: '12mp', color:'black'}
]
function getChepestPhone(phones) {
    let min = phones[0];
    for(const phone of phones) {
        if(phone.price < min.price){
            min = phone ;
        }
    }
    return min;
}
console.log(" chip phone is ",phones(mobile));
