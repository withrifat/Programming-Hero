import React, { useEffect, useState } from 'react';

const AllBids = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bids')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([data]);
        }
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
      });
  }, []);

  return (
    <div className="p-4 md:p-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1a1a3d]">
          All Bids<span className="text-purple-500">{products.length}</span>
        </h1>

        {/* Table Container */}
        <div className="overflow-x-auto shadow-sm border border-gray-100 rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-500 text-sm border-b">
                <th className="py-4 px-4 font-semibold">SL No</th>
                <th className="py-4 px-4 font-semibold">Image</th>
                <th className="py-4 px-4 font-semibold">Product Name</th>
                <th className="py-4 px-4 font-semibold">Bidder Name</th>
                <th className="py-4 px-4 font-semibold">Price (Bid)</th>
                <th className="py-4 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr 
                  key={product._id} 
                  className="border-b last:border-0 hover:bg-gray-50 transition-colors duration-200 group"
                >
                  {/* SL No */}
                  <td className="py-4 px-4 text-gray-700 font-medium">{index + 1}</td>
                  
                  {/* Product Image */}
                  <td className="py-4 px-4">
                    <div className="w-12 h-10 bg-gray-100 rounded overflow-hidden">
                      <img 
                        src={product.imageURL} 
                        alt={product.productTitle} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>

                  {/* Product Title */}
                  <td className="py-4 px-4 text-gray-700 font-medium">
                    {product.productTitle}
                  </td>

                  {/* Bidder Name */}
                  <td className="py-4 px-4 text-gray-600">
                    {product.name}
                  </td>

                  {/* Bid Amount */}
                  <td className="py-4 px-4 text-gray-700 font-semibold">
                    ${product.bidAmount}
                  </td>

                  {/* Status */}
                  <td className="py-4 px-4">
                    <span className={`text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm ${
                      product.status === 'pending' ? 'bg-yellow-400' : 'bg-green-500'
                    }`}>
                      {product.status}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBids;