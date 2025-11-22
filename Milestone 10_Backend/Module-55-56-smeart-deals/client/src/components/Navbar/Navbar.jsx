import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user , signOutUser} = use(AuthContext)

  const handleSignOut = ()=>{
    signOutUser()
    .then()
    .catch()
  }

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/allProducts">All Products</NavLink></li>
      <li><NavLink to="/register">Register</NavLink></li>
      {
        user && <>
        <li><NavLink to="/myProducts">my Products</NavLink></li>
        <li><NavLink to="/myBids">My Bids</NavLink></li>
        </>
      }
    </>
  );


  return (
    <nav className="navbar bg-base-100/80 backdrop-blur-md shadow-sm sticky top-0 z-50 rounded-2xl md:px-7 px-2">
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

        <a className=" text-2xl font-bold normal-case">
          Smart <span className="text-primary-gradient">Deals</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1 font-medium">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        {
          user ?
          <a onClick={handleSignOut} className="btn bg-primary-gradient text-white border-0 hover:opacity-90">Sign Out</a>:
          <Link to="/register" className="btn bg-primary-gradient text-white border-0 hover:opacity-90">Login</Link>
        }
      </div>
    </nav>
  );
};

export default Navbar;
