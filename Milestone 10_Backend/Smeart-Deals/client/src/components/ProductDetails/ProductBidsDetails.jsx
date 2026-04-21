import React, { useEffect, useState } from 'react';
import DeleteButton from '../../Utils/DeletButton';


const ProductBidsDetails = ({ ProductID }) => {
    const [bids, setBids] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:3000/products/bids/${ProductID}`)
            .then((res) => res.json())
            .then((data) => {
                setBids(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching bids:', err);
                setLoading(false);
            });
    }, [ProductID]);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="mt-24">
            <h2 className="text-4xl font-black mb-10 text-slate-800">Bids For This Product</h2>
            
            <div className="overflow-x-auto">
                {bids.length === 0 ? (
                    <div className="text-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                        <p className="text-gray-500 text-lg">এখন পর্যন্ত এই প্রোডাক্টে কোনো বিড করা হয়নি।</p>
                    </div>
                ) : (
                    <table className="table w-full border-separate border-spacing-y-4">
                        <thead>
                            <tr className="text-gray-500 uppercase text-xs tracking-wider">
                                <th className="bg-transparent">SL No</th>
                                <th className="bg-transparent">Buyer Info</th>
                                <th className="bg-transparent">Bid Amount</th>
                                <th className="bg-transparent">Contact Details</th>
                                <th className="bg-transparent text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bids.map((bid, index) => (
                                <tr key={bid._id} className="bg-white shadow-sm border group hover:shadow-md transition-shadow">
                                    <td className="font-bold text-gray-400 pl-6">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-4">
                                            <div className="avatar">
                                                <div className="w-12 h-12 rounded-full ring ring-purple-100 ring-offset-2">
                                                    <img 
                                                        src={bid.imageURL || "https://i.ibb.co/mJR7z1B/user.png"} 
                                                        alt={bid.name} 
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800">{bid.name}</p>
                                                <p className="text-[11px] text-gray-400">{bid.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-col">
                                            <span className="text-lg font-black text-green-600">
                                                ${bid.bidAmount.toLocaleString()}
                                            </span>
                                            <span className="badge badge-ghost badge-xs text-[10px] uppercase font-bold">
                                                {bid.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full inline-block">
                                            {bid.contactInfo}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex justify-center gap-2">
                                            <button className="btn btn-sm btn-success text-white px-4 hover:scale-105 transition-transform">
                                                Accept
                                            </button>
                                    <DeleteButton
                                                id={bid._id} 
                                                apiUrl="http://localhost:3000/bids" 
                                                userEmail={bid.email} // এখানে চেক করবে ইউজার আছে কি না
                                                onDeleteSuccess={(deletedId) => {
                                                    const remainingBids = bids.filter(b => b._id !== deletedId);
                                                    setBids(remainingBids);
                                                }} 
                                    />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ProductBidsDetails;