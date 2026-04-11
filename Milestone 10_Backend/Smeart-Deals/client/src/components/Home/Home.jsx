import React from 'react';
import { motion } from 'framer-motion';
import { CiSearch } from 'react-icons/ci';
import { NavLink } from 'react-router';

const Home = () => {
  return (
    <div className="bg-base-100 overflow-hidden">
      {/* Hero Section */}
{/* Hero Section */}
      <div 
        className="relative hero min-h-[90vh] flex items-center justify-center overflow-hidden px-4 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop')` 
        }}
      >
        {/* Futuristic Background Orbs  */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[150px] animate-bounce"></div>
        </div>

        <div className="hero-content text-center z-10 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} 
            className="backdrop-blur-xl bg-blue/40 p-6 md:p-12 rounded-[2rem] border border-white/20 "
          >
            <h1 className="text-4xl md:text-6xl font-extrabold my-2 text-black leading-tight">
              Deal your <span className="text-gradient">Products</span>
              <br />
              in a <span className="text-gradient">Smart</span> way !
            </h1>
            <p className="pb-10 text-base md:text-lg text-gray-700 max-w-lg mx-auto font-medium">
              SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
            </p>

            {/* --- Improved Search Section --- */}
            <div className="flex justify-center mb-10">
              <div className="join w-full max-w-lg  border border-primary/10 rounded-full overflow-hidden bg-transparent shadow-lg shadow-primary/30">
                <div className="flex items-center bg-transparent px-4 join-item w-full">
                  <CiSearch className="text-2xl text-primary" />
                  <input
                    type="text"
                    placeholder="Search For Products, Categories..."
                    className="input bg-transparent border-none focus:outline-none w-full h-14 text-sm md:text-base "
                    required
                  />
                </div>
                <button className="btn btn-primary join-item px-6 md:px-8 h-14 text-white hover:brightness-110 transition-all border-none">
                  Search
                </button>
              </div>
            </div>

            {/* --- Action Buttons --- */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/AllProducts" className="btn btn-primary btn-md md:btn-lg rounded-xl px-8 shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all text-white">
                Watch all products
              </NavLink>
              <NavLink className="btn btn-outline btn-secondary btn-md md:btn-lg rounded-xl px-8 hover:bg-secondary hover:text-white transition-all border-2">
                Post an products
              </NavLink>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Recent Products Section */}
      <h2 className="text-center text-3xl md:text-5xl font-bold py-16">Recent Products</h2>
      <div className="mx-auto max-w-[1400px] px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -12 }}
              className="card bg-base-100 border border-base-300   transition-all overflow-hidden group"
            >
              <figure className="overflow-hidden aspect-square">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="group-hover:scale-110 transition-transform duration-500 object-cover w-full h-full"
                />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title text-lg">
                  Premium Gadget
                  <div className="badge badge-secondary badge-sm">NEW</div>
                </h2>
                <p className="text-sm opacity-70 line-clamp-2">
                  আধুনিক ফিচার সমৃদ্ধ এই প্রোডাক্টটি আপনার জীবনকে করবে আরও সহজ।
                </p>
                <div className="card-actions justify-end mt-4">
                  <div className="badge badge-outline opacity-50">Tech</div>
                  <div className="badge badge-outline opacity-50">Future</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
