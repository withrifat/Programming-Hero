import React, { useEffect, useState } from 'react';

const MyBids = () => {
  const [products, setProducts] = useState([]);
  const userEmail = "mdrifathassain97880@gmail.com"; 

  useEffect(() => {
    fetch(`http://localhost:3000/bids?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
      });
  }, [userEmail]);

  return (
    <div className="p-4 md:p-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1a1a3d]">
          My Bids: <span className="text-purple-500">{products.length}</span>
        </h1>

        <div className="overflow-x-auto shadow-sm border border-gray-100 rounded-lg">
          {products.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-500 text-sm border-b">
                  <th className="py-4 px-4 font-semibold">SL No</th>
                  <th className="py-4 px-4 font-semibold">Image</th>
                  <th className="py-4 px-4 font-semibold">Product Name</th>
                  <th className="py-4 px-4 font-semibold">Bidder Name</th>
                  <th className="py-4 px-4 font-semibold">Price (Bid)</th>
                  <th className="py-4 px-4 font-semibold">Status</th>
                  <th className="py-4 px-4 text-center font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr 
                    key={product._id} 
                    className="border-b last:border-0 hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <td className="py-4 px-4 text-gray-700 font-medium">{index + 1}</td>
                    <td className="py-4 px-4">
                      <div className="w-12 h-10 bg-gray-100 rounded overflow-hidden">
                        <img 
                          src={product.imageURL} 
                          alt={product.productTitle} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700 font-medium">{product.productTitle}</td>
                    <td className="py-4 px-4 text-gray-600">{product.name}</td>
                    <td className="py-4 px-4 text-gray-700 font-semibold">${product.bidAmount}</td>
                    <td className="py-4 px-4">
                      <span className={`text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm ${
                        product.status === 'pending' ? 'bg-yellow-400' : 'bg-green-500'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="px-3 py-1 border border-purple-400 text-purple-500 text-xs rounded hover:bg-purple-500 hover:text-white transition-all">Edit</button>
                        <button className="px-3 py-1 border border-orange-400 text-orange-500 text-xs rounded hover:bg-orange-500 hover:text-white transition-all">Delete</button>
                        <button className="px-3 py-1 border border-green-400 text-green-500 text-xs rounded hover:bg-green-500 hover:text-white transition-all">Details</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-10 text-gray-500">
              No bids found for this email.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBids;