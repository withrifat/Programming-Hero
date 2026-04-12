import React from 'react';
import { NavLink } from 'react-router';

const ProductCard = ({ products }) => {
  const { _id, title, status, image,price_min, price_max, description } = products;
  //   const { _id, title, price_min, price_max, email, category, image, location, seller_name, seller_image, condition, usage, description, seller_contact } = product;
  return (
<div className="group relative w-96 overflow-hidden rounded-2xl bg-base-100 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
  {/* Image Section with Hover Zoom */}
  <figure className="relative overflow-hidden">
    <img 
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" 
      alt="Shoes  " 
      className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <p className='hidden'>{image}</p>
    {/* Status Overlay - Inside Image */}
    <div className="absolute top-4 left-4">
      <div className="badge badge-secondary glass bg-opacity-60 px-4 py-3 font-bold tracking-wide text-white shadow-lg">
        {status}
      </div>
    </div>
  </figure>

  {/* Card Body */}
  <div className="card-body p-6">
    <h2 className="card-title text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-primary">
      {title}
    </h2>
    <p className="text-sm leading-relaxed text-gray-600">
      {description}
    </p>
    <div className="">
        <span className='text-primary text-xl'> {price_min}</span> <br />
        <span className='text-red-400 line-through opacity-70 decoration-2 text-sm'> {price_max}</span>
    </div>
    
    <div className="card-actions mt-4 justify-end">
      <NavLink to={`/product-details/${_id}`} className="btn btn-primary btn-block transition-all duration-300 hover:scale-95 active:scale-100">
        View Details
      </NavLink>
    </div>
  </div>
</div>
  );
};

export default ProductCard;
