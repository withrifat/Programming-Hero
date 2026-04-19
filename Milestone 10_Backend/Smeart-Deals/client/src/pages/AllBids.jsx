import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; 
const AllBids = () => {

  const [bids, setBids] = useState([]);

  const deletBit = (id) => {
    fetch(`http://localhost:3000/bids/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted Successful",
            icon: "success",
            timer: 1500
          });
          
          const remainingBids = bids.filter((bid) => bid._id !== id);
          setBids(remainingBids);
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong! ${err.message}`,
        });
      });
  };

  useEffect(() => {
    fetch('http://localhost:3000/bids')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBids(data);
        } else {
          setBids([data]);
        }
      })
      .catch((err) => {
        console.error('Error fetching bids:', err);
      });
  }, []);

  return (
    <div className="p-4 md:p-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1a1a3d]">
          All Bids: <span className="text-purple-500">{bids.length}</span>
        </h1>

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
                <th className="py-4 px-4 font-semibold">Action</th> 
              </tr>
            </thead>
            <tbody>
              {bids.map((bid, index) => (
                <tr 
                  key={bid._id} 
                  className="border-b last:border-0 hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="py-4 px-4 text-gray-700 font-medium">{index + 1}</td>
                  
                  <td className="py-4 px-4">
                    <div className="w-12 h-10 bg-gray-100 rounded overflow-hidden">
                      <img 
                        src={bid.imageURL} 
                        alt={bid.productTitle} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>

                  <td className="py-4 px-4 text-gray-700 font-medium">{bid.productTitle}</td>
                  <td className="py-4 px-4 text-gray-600">{bid.name}</td>
                  <td className="py-4 px-4 text-gray-700 font-semibold">${bid.bidAmount}</td>

                  <td className="py-4 px-4">
                    <span className={`text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm ${
                      bid.status === 'pending' ? 'bg-yellow-400' : 'bg-green-500'
                    }`}>
                      {bid.status}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <button 
                      onClick={() => deletBit(bid._id)} 
                      className="btn btn-sm btn-outline btn-error px-4 hover:bg-red-500 hover:text-white transition-all"
                    >
                      Reject
                    </button>
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