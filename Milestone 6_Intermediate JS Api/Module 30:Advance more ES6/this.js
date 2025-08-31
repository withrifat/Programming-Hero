class Vehicle{
    #tin;
    constructor(type, brand, price){
        this.type = type
        this.brand = brand
        this.price = price
        this.#tin = '12412QWSAS'
    }
    getTin(){
        return this.#tin;
    }
    getThis(){
        console.log(this)
    }
    getPrice(){
        return this.price
    }
}

const car1 = new Vehicle('car', 'Honda', 500000)
const car2 = new Vehicle('car', 'Toyota', 400000)
// car1.getThis();
console.log(car1)
// console.log(car2.getPrice())
// console.log(car1.getPrice())


const student = {
    name: 'Rahul dravid',
    score: 10000,
    getScore: function(){
        console.log(this)
    },
    getScoreArrow: () =>{
        console.log(this)
    }
}
// student.getScore();
// student.getScoreArrow();
// console.log('ultimate this', this)