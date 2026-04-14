import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { NavLink } from 'react-router';
import LatestProducts from '../Register/LatestProducts';

const Home = () => {


  return (
    <div className="bg-base-100 overflow-hidden">
      {/* Hero Section */}
      <div className="">
        <div
          className="relative hero min-h-[90vh] flex items-center justify-center overflow-hidden px-4 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[150px] animate-bounce"></div>
          </div>

          <div className="hero-content text-center z-10 w-full max-w-4xl">
            <div
              className="backdrop-blur-xl bg-white/40 p-6 md:p-12 rounded-[2rem] border border-white/20"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold my-2 text-black leading-tight">
                Deal your <span className="text-primary">Products</span>
                <br />
                in a <span className="text-secondary">Smart</span> way!
              </h1>
              <p className="pb-10 text-base md:text-lg text-gray-700 max-w-lg mx-auto font-medium">
                SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
              </p>

              <div className="flex justify-center mb-10">
                <div className="join w-full max-w-lg border border-primary/10 rounded-full overflow-hidden bg-white/50 shadow-lg shadow-primary/10">
                  <div className="flex items-center px-4 join-item w-full">
                    <CiSearch className="text-2xl text-primary" />
                    <input
                      type="text"
                      placeholder="Search For Products, Categories..."
                      className="input bg-transparent border-none focus:outline-none w-full h-14 text-sm md:text-base"
                    />
                  </div>
                  <button className="btn btn-primary join-item px-6 md:px-8 h-14 text-white">Search</button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NavLink to="/AllProducts" className="btn btn-primary btn-md md:btn-lg rounded-xl px-8 text-white">
                  Watch all products
                </NavLink>
                <NavLink to="/post" className="btn btn-outline btn-secondary btn-md md:btn-lg rounded-xl px-8">
                  Post a product
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Recent Products Section */}
      <h2 className="text-center text-3xl md:text-5xl font-bold py-16">Recent <span className='text-primary'>Products</span></h2>
      {/* here is the latest products card  */}
      <div className="mx-auto max-w-7xl px-4 pb-20">
          <LatestProducts />
      </div>
    </div>
  );
};

export default Home;
