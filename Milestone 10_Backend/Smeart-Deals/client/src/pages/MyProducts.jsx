import React, { useEffect, useState, useContext } from 'react';
import useAxiosInstant from '../Hooks/useAxiosInstant';
import { AuthContext } from '../context/AuthContex';

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxiosInstant();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosInstance.get(`/products?email=${user.email}`)
        .then(res => {
          setProducts(res.data);
        });
    }
  }, [axiosInstance, user?.email]);
  
  return (
    <div className="p-4 md:p-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1a1a3d]">
          My Products: <span className="text-purple-500">{products.length}</span>
        </h1>

        <div className="overflow-x-auto shadow-sm border border-gray-100 rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-500 text-sm border-b">
                <th className="py-4 px-4 font-semibold">SL No</th>
                <th className="py-4 px-4 font-semibold">Image</th>
                <th className="py-4 px-4 font-semibold">Product Name</th>
                <th className="py-4 px-4 font-semibold">Category</th>
                <th className="py-4 px-4 font-semibold">Price Range</th>
                <th className="py-4 px-4 font-semibold">Status</th>
                <th className="py-4 px-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr 
                  key={product._id} 
                  className="border-b last:border-0 hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="py-4 px-4 text-gray-700 font-medium">{index + 1}</td>
                  <td className="py-4 px-4">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-12 h-10 object-cover rounded shadow-sm"
                    />
                  </td>
                  <td className="py-4 px-4 text-gray-700 font-medium">{product.title}</td>
                  <td className="py-4 px-4 text-gray-600">{product.category}</td>
                  <td className="py-4 px-4 text-gray-700 font-semibold">
                    ${product.price_min} - ${product.price_max}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm ${
                      product.status === 'pending' ? 'bg-yellow-400' : 'bg-green-500'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="px-3 py-1 border border-purple-400 text-purple-500 text-xs rounded hover:bg-purple-500 hover:text-white transition-all">
                        Edit
                      </button>
                      <button className="px-3 py-1 border border-orange-400 text-orange-500 text-xs rounded hover:bg-orange-500 hover:text-white transition-all">
                        Delete
                      </button>
                      <button className="px-3 py-1 border border-green-400 text-green-500 text-xs rounded hover:bg-green-500 hover:text-white transition-all">
                        Make Sold
                      </button>
                    </div>
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

export default MyProducts;