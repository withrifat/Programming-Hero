import React from 'react';

const FindToy = () => {
  const categories = [
    { name: 'Playsets', img: '/c1.png' },
    { name: 'Control Toys', img: '/c2.png' },
    { name: 'Educational Toys', img: '/c3.png' },
    { name: 'Eco-Friendly Toys', img: '/c4.png' },
    { name: 'Stuffed Toys', img: '/c5.png' },
  ];

  return (
    <div className="text-center py-10 px-4 container mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-gray-800 font-playful">Find the Perfect Toy</h1>
      <p className="text-gray-500 mb-8">Our Collections</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-2xl hover:shadow-md transition p-4">
            <img src={item.img} alt={item.name} className="w-24 h-24 object-contain mb-3" />
            <p className="text-gray-700 font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindToy;
