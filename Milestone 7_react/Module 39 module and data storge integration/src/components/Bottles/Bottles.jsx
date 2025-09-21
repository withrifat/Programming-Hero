import React, { use, useEffect, useState } from 'react';
import Bottle from './Bottle';
import { addToStoredCart, getStoreCart, removeFromCart } from '../../utils/localstroge';
import Cart from '../Cart/Cart';
const Bottles = ({ bottlePromise }) => {
  const bottles = use(bottlePromise);

  //  useEffect --> hooks --> sideEffect- like deal with side any thing
  useEffect(() => {
    const storedCartIds = getStoreCart();
    // console.log(storedCartIds, bottles );
    const storedCart = [];
    storedCartIds.map((id) => {
      const cartBottle = bottles.find((bottle) => bottle.id === id);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    });

    setCart(storedCart);
  }, [bottles]);

  // event handler for button components
  const [cart, setCart] = useState([]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);

    // save the bottle id into the storage
    addToStoredCart(bottle.id);
  };

  const handleRemoveFromCart = id => {
    const remainingCart = cart.filter(bottle => bottle.id !== id);
    setCart(remainingCart);  // remove cart from html 
    removeFromCart(id)  // remove from localStorage
  }
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Bottles: {bottles.length}</h2>
      <div className="">
        <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      </div>
      <p> Total added : {cart.length} </p>
      <div className="grid grid-cols-1 gap-5  md:grid-cols-3 lg:grid-cols-4 ">
        {bottles.map((bottle) => (
          <Bottle handleAddToCart={handleAddToCart} key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
