import React from 'react';

const Bottle = ({ bottle, handleAddToCart }) => {
  const { img, name, price, quantity } = bottle;

  return (
    <div className="card bg-base-100 w-96 shadow-sm p-5">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {name} </h2>
        <p> This is a simple bottle and its name is  {name} and it has {quantity} water and it's price is {price}</p>
        <p className='text-xl text-red-600 font-bold'>{price}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleAddToCart(bottle)} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Bottle;
