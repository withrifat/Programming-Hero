let mobile = {
    price: 25000 ,
    brand: "samsung",
    camera: "48mp",
    madeIn: "Taiwan",
}
// array ar jonno for of 
// object ar jonno for in
for (prop in mobile){
    // console.log(prop);
    // console.log(mobile[prop]);
    
}


// object to array 
const keys = Object.keys(mobile)
console.log(keys);
// array to for loop 
for (prop of keys) {
    console.log(prop);
}
