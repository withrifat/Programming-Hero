import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 p-4">
      {cart.map((bottle) => (
        <div key={bottle.id} className="card card-compact w-60 bg-base-100 shadow-md">
          <figure>
            <img src={bottle.img} alt={bottle.name} className="h-40 w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-sm">{bottle.name}</h2>
            <p className="text-xs"> {bottle.price} </p>
            <div className="flex justify-between">
                {/* <button className="btn btn-xs btn-primary">Remove</button> */}
                <button onClick={()=>handleRemoveFromCart(bottle.id)} className="btn btn-xs btn-primary" >Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

// import React from 'react';
// import Bottle from '../Bottles/Bottle';

// const Cart = ({ cart }) => {
//   return (
//     <div>
//       {cart.map((Bottle) => (
//         <div key={Bottle.id}>
//           <div className="card  image-full  w-80 shadow-sm">
//             <figure>
//               <img src={Bottle.img} className='' alt="Shoes" />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title"> {cart.name} </h2>
//               <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//               <div className="card-actions justify-end">
//                 <button className="btn btn-primary">Remove From Cart</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;
