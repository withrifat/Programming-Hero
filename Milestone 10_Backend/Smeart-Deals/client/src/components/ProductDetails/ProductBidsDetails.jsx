import React, { useEffect, useState } from 'react';

const ProductBidsDetails = ({ProductID}) => {
      const [products, setProducts] = useState([]);
      // const [loading, setLoading] = useState(true);
      const {_id,} = products;
      console.log("products from bits", products, _id);
    
      useEffect(() => {
        fetch(`http://localhost:3000/products/${ProductID}`)
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
            // setLoading(false);
          })
          .catch((err) => {
            console.error('Error fetching products:', err);
            // setLoading(false);
          });
      }, []);

    return (
                <div className="mt-24">
                    <h2 className="text-4xl font-black mb-10">Bids For This Product</h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full border-separate border-spacing-y-4">
                            <thead>
                                <tr className="text-gray-500 uppercase text-xs">
                                    <th>SL No</th>
                                    <th>Product</th>
                                    <th>Buyer</th>
                                    <th>Bid Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* এখানে ডাটাবেজ থেকে ম্যাপ করে ডাটা দেখাবেন */}
                                <tr className="bg-white shadow-sm border">
                                    <td className="font-bold">01</td>
                                    <td>
                                        <div className="font-bold text-sm">{title}</div>
                                        <div className="text-xs text-gray-400">Asking: ${price_min}</div>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                            <div>
                                                <p className="text-xs font-bold">Sample Buyer</p>
                                                <p className="text-[10px] text-gray-400">buyer@example.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-bold text-green-600">$550</td>
                                    <td className="space-x-2">
                                        <button className="btn btn-xs btn-outline btn-success normal-case">Accept</button>
                                        <button className="btn btn-xs btn-outline btn-error normal-case">Reject</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
    );
};

export default ProductBidsDetails;