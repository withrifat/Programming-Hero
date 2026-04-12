import React from 'react';

const MyProducts = () => {
  // ডেমো ডেটা
  const products = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: "Orange Juice",
    category: "Beverage",
    price: "$100",
    status: "Pending",
  }));

  return (
    <div className="p-4 md:p-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1a1a3d]">
          My Products: <span className="text-purple-500">10</span>
        </h1>

        {/* Table Container for Responsiveness */}
        <div className="overflow-x-auto shadow-sm border border-gray-100 rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-500 text-sm border-b">
                <th className="py-4 px-4 font-semibold">SL No</th>
                <th className="py-4 px-4 font-semibold">Image</th>
                <th className="py-4 px-4 font-semibold">Product Name</th>
                <th className="py-4 px-4 font-semibold">Category</th>
                <th className="py-4 px-4 font-semibold">Price</th>
                <th className="py-4 px-4 font-semibold">Status</th>
                <th className="py-4 px-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr 
                  key={product.id} 
                  className="border-b last:border-0 hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <td className="py-4 px-4 text-gray-700 font-medium">{product.id}</td>
                  <td className="py-4 px-4">
                    <div className="w-12 h-10 bg-gray-100 rounded flex items-center justify-center">
                      {/* Placeholder for image */}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-700 font-medium">{product.name}</td>
                  <td className="py-4 px-4 text-gray-600">{product.category}</td>
                  <td className="py-4 px-4 text-gray-700 font-semibold">{product.price}</td>
                  <td className="py-4 px-4">
                    <span className="bg-yellow-400 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
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