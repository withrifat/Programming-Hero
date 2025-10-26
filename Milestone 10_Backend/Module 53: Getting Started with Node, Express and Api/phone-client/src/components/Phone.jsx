import React from "react";

const Phone = ({ phone }) => {
  const { name, image, price, description } = phone;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:scale-105">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm">{description.slice(0, 80)}...</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-blue-600">${price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Phone;
