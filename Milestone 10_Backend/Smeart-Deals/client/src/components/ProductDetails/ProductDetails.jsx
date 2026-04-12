import { useLoaderData, useNavigate } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";
import { use, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContex';

const ProductDetails = () => {
    const product = useLoaderData();
    const navigate = useNavigate();
    const bidModalRef = useRef(null);
    const { user } = use(AuthContext);
    
    // Safety check for user
    const displayName = user?.displayName || "Guest";
    const userEmail = user?.email || "No Email";

    const handleBidModalOpen = () => {
        bidModalRef.current.showModal();
    }

    const handleBidSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        
        const bids = {
            productId: product._id,
            productTitle: product.title,
            name: form.name.value,
            email: form.email.value,
            imageURL: form.imageURL.value,
            bidAmount: parseFloat(form.bidAmount.value),
            contactInfo: form.contactInfo.value,
            status: 'pending'
        };
        const bidStr = JSON.stringify(bids);

        console.log("Submitted Bid Data:", bidStr);
        
        // এখানে আপনি আপনার fetch বা axios কল যোগ করতে পারেন
        // Example: fetch('url', { method: 'POST', body: JSON.stringify(bidData) })

        bidModalRef.current.close();
        form.reset(); 
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) return <div className="min-h-screen flex justify-center items-center">Loading...</div>;

    const { 
        title, category, condition, description, email, location, 
        price_max, price_min, seller_contact, seller_image, 
        seller_name, status, usage, created_at, _id 
    } = product;

    return (
        <div className="min-h-screen bg-white py-10 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <button 
                    onClick={() => navigate(-1)} 
                    className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6 font-medium bg-transparent border-none cursor-pointer"
                >
                    <FaArrowLeft /> Back To Products
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* বাম পাশ: ইমেজ এবং ডেসক্রিপশন */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square">
                            <img 
                                src={`https://loremflickr.com/800/800/${category.replace(/\s+/g, '')}?random=${_id}`} 
                                alt={title} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 border-b pb-2">Product Description</h3>
                            <div className="flex justify-between text-sm mb-4">
                                <p><span className="text-primary font-bold">Condition :</span> {condition}</p>
                                <p><span className="text-primary font-bold">Usage Time :</span> {usage}</p>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {description || "Explore our premium selection of high-quality products curated specifically to meet your needs."}
                            </p>
                        </div>
                    </div>

                    {/* ডান পাশ: প্রোডাক্ট ডিটেইলস ও সেলার ইনফো */}
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">{title}</h1>
                            <p className="text-primary font-medium text-sm mb-6">{category}</p>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-green-500">${price_min} - ${price_max}</h2>
                                <p className="text-gray-400 text-xs mt-1 font-medium">Price range for bidding</p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-bold text-lg">Product Details</h4>
                                <p className="text-sm text-gray-600"><strong>Product ID:</strong> {_id}</p>
                                <p className="text-sm text-gray-600"><strong>Posted:</strong> {new Date(created_at).toLocaleDateString()}</p>
                            </div>
                        </div>

                        <div className="space-y-4 pt-6 border-t">
                            <h4 className="font-bold text-lg">Seller Information</h4>
                            <div className="flex items-center gap-4">
                                <img src={seller_image} className="w-12 h-12 rounded-full object-cover bg-gray-200" alt={seller_name} />
                                <div>
                                    <p className="font-bold text-slate-800">{seller_name}</p>
                                    <p className="text-xs text-gray-400 italic">{email}</p>
                                </div>
                            </div>
                            <div className="text-sm space-y-2 text-gray-600 pt-2">
                                <p><strong>Location:</strong> {location}</p>
                                <p><strong>Contact:</strong> {seller_contact}</p>
                                <p>
                                    <strong>Status:</strong> 
                                    <span className="badge badge-warning badge-sm font-bold ml-1 uppercase">{status}</span>
                                </p>
                            </div>
                        </div>

                        <button 
                            className="w-full py-4 bg-[#A855F7] hover:bg-[#9333EA] text-white font-bold rounded-lg transition-all text-lg shadow-lg" 
                            onClick={handleBidModalOpen}>
                            I Want Buy This Product
                        </button>

                        {/* Bidding Modal */}
                        <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box max-w-lg">
                                <h3 className="font-bold text-2xl text-center text-[#001529] mb-6">Give Seller Your Offered Price</h3>
                                <form onSubmit={handleBidSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="form-control">
                                            <label className="label"><span className="label-text font-semibold text-[#4A5568]">Your Name</span></label>
                                            <input name='name' readOnly defaultValue={displayName} className="input input-bordered w-full focus:outline-none" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label"><span className="label-text font-semibold text-[#4A5568]">Your Email</span></label>
                                            <input name='email' readOnly defaultValue={userEmail} className="input input-bordered w-full focus:outline-none" required />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label"><span className="label-text font-semibold text-[#4A5568]">Buyer Image URL</span></label>
                                        <input name='imageURL' type="url" placeholder="https://..." className="input input-bordered w-full focus:outline-none" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label"><span className="label-text font-semibold text-[#4A5568]">Bid Amount ($)</span></label>
                                        <input name='bidAmount' type="number" placeholder={`Min: ${price_min}`} className="input input-bordered w-full focus:outline-none" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label"><span className="label-text font-semibold text-[#4A5568]">Contact Info</span></label>
                                        <input name='contactInfo' type="text" placeholder="e.g. +88017..." className="input input-bordered w-full focus:outline-none" required />
                                    </div>
                                    <div className="modal-action flex justify-end gap-3 mt-8">
                                        <button type="button" onClick={() => bidModalRef.current.close()} className="btn btn-outline border-purple-400 text-purple-600 hover:bg-purple-50 px-8">Cancel</button>
                                        <button type="submit" className="btn bg-[#9D5CFF] hover:bg-[#8A46FF] text-white border-none px-8">Submit Bid</button>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                    </div>
                </div>

                {/* নিচের অংশ: বিডিং টেবিল */}
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
            </div>
        </div>
    );
};

export default ProductDetails;