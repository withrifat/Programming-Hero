import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/allProducts">All Products</NavLink></li>
    </>
  );

  return (
    <nav className="navbar bg-base-100/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h10m-10 6h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-48 p-2 shadow">
            {links}
          </ul>
        </div>

        <a className="btn btn-ghost text-2xl font-bold normal-case">
          Smart <span className="text-primary-gradient">Deals</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1 font-medium">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn bg-primary-gradient text-white border-0 hover:opacity-90">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
