
import React, { use, useState } from 'react';
import Bottle from './Bottle';
const Bottles = ({bottlePromise}) => {
    const bottles = use(bottlePromise)
    

    // event handler for button components 
    const [cart, setCart] = useState([]);
    const handleAddToCart = (bottle)=>{
        const newCart = [...cart, bottle];
        setCart(newCart);
    }
    console.log(cart);
    
    
    return (
        <div className='container mx-auto p-4 md:p-8'>
            <h2 className='text-3xl font-bold text-center mb-6 text-white'>Bottles: {bottles.length}</h2>
            <p> Total added :  {cart.length} </p>
            <div className="grid grid-cols-1 gap-5  md:grid-cols-3 lg:grid-cols-4 ">
                {
                    bottles.map(bottle => 
                        <Bottle handleAddToCart={handleAddToCart} key={bottle.id} bottle={bottle}></Bottle>
                    )
                }
            </div>
        </div>
    );
};

export default Bottles;