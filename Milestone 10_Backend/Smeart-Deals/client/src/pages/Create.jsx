import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import { IoMdArrowRoundBack } from 'react-icons/io';

const Create = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const productPayload = {
      title: form.title.value,
      price_min: parseFloat(form.price_min.value),
      price_max: parseFloat(form.price_max.value),
      email: form.email.value,
      category: form.category.value,
      created_at: new Date().toISOString(),
      image: form.image.value,
      status: 'pending',
      location: form.location.value,
      seller_image: form.seller_image.value,
      seller_name: form.seller_name.value,
      condition: form.condition.value,
      usage: form.usage.value,
      description: form.description.value,
      seller_contact: form.seller_contact.value,
    };

    try {
      const { data } = await axios.post('http://localhost:3000/products', productPayload);

      if (data?.insertedId) {
        toast.success('Product posted successfully!');
        form.reset();
      } else {
        toast.error('Failed to post product. Please try again.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      toast.error('Failed to post product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-md font-bold text-gray-600 hover:text-indigo-600 flex items-center gap-2 border-none bg-transparent cursor-pointer transition-all"
        >
          <IoMdArrowRoundBack /> Back
        </button>

        <div className="bg-purple-200 rounded-3xl shadow-4xl overflow-hidden border border-slate-100">
          <div className="bg-[#A855F7] p-8 text-center text-white">
            <h1 className="text-3xl font-black uppercase tracking-wider">Create New Product</h1>
            <p className="opacity-90 mt-2 font-medium">Sell your items quickly and professionally</p>
          </div>

          <form onSubmit={handleProductSubmit} className="p-8 md:p-12 space-y-10">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 border-l-4 border-purple-500 pl-3">1. Item Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="text-sm font-bold text-gray-500 mb-2 block uppercase tracking-tighter">Product Title</label>
                  <input
                    name="title"
                    type="text"
                    placeholder="e.g. Sony Mirrorless Camera"
                    className="input input-bordered w-full focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="text-sm font-bold text-gray-500 mb-2 block uppercase tracking-tighter">Category</label>
                  <select name="category" className="select select-bordered w-full focus:outline-none" required>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Home Appliances">Home Appliances</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Baby Toys">Baby Toys</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Health & Beauty">Health & Beauty</option>
                    <option value="Sports & Outdoors">Sports & Outdoors</option>
                    <option value="Books & Stationery">Books & Stationery</option>
                    <option value="Kitchen & Dining">Kitchen & Dining</option>
                    <option value="Home Decor">Home Decor</option>
                    <option value="Tools & Hardware">Tools & Hardware</option>
                    <option value="Jewelry & Watches">Jewelry & Watches</option>
                    <option value="Bags & Travel">Bags & Travel</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Pets & Accessories">Pets & Accessories</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-bold text-gray-500 mb-2 block uppercase tracking-tighter">Min Price ($)</label>
                  <input name="price_min" type="number" placeholder="Min" className="input input-bordered w-full focus:outline-none" required />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-500 mb-2 block uppercase tracking-tighter">Max Price ($)</label>
                  <input name="price_max" type="number" placeholder="Max" className="input input-bordered w-full focus:outline-none" required />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-500 mb-2 block uppercase tracking-tighter">Condition</label>
                  <select name="condition" className="select select-bordered w-full focus:outline-none">
                    <option value="fresh">Fresh</option>
                    <option value="used">Used</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 border-l-4 border-purple-500 pl-3">2. Media & Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-bold text-gray-500 mb-2 block uppercase tracking-tighter">Product Image URL</label>
                  <input name="image" type="url" placeholder="https://..." className="input input-bordered w-full focus:outline-none" required />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-500 mb-2 block uppercase tracking-tighter">Seller Avatar URL</label>
                  <input name="seller_image" type="url" placeholder="https://..." className="input input-bordered w-full focus:outline-none" required />
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-6 bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-300">
              <h3 className="text-xl font-bold text-slate-700">3. Contact Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="seller_name" type="text" placeholder="Your Name" className="input input-bordered w-full" required />
                <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full" required />
                <input name="seller_contact" type="text" placeholder="Contact Number (e.g. +88017...)" className="input input-bordered w-full" required />
                <input name="location" type="text" placeholder="Your City/Area" className="input input-bordered w-full" required />
              </div>
            </div>

            <div className="space-y-4">
              <div className="form-control">
                <label className="text-sm font-bold text-gray-500 mb-2 block uppercase tracking-tighter">Usage Period</label>
                <input
                  name="usage"
                  type="text"
                  placeholder="e.g. 6 Months old / Used 1 year"
                  className="input input-bordered w-full focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="text-sm font-bold text-gray-500 mb-2 block uppercase tracking-tighter">Full Description</label>
                <textarea
                  name="description"
                  rows="5"
                  className="textarea textarea-bordered w-full focus:outline-none p-4"
                  placeholder="Mention everything about the product..."
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-5 rounded-2xl text-white font-black text-xl shadow-xl transition-all active:scale-[0.98] ${
                loading ? 'bg-gray-400' : 'bg-[#A855F7] hover:bg-[#9333EA] shadow-purple-200'
              }`}
            >
              {loading ? 'POSTING TO SERVER...' : 'PUBLISH LISTING'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
