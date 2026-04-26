import React from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContex';
import { use } from 'react';

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser().then().catch();
  };

const links = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/AllProducts">All Products</NavLink>
    </li>
    <li>
      <NavLink to="/AllBids">All Bids</NavLink>
    </li>
    {user?.email === 'mdrifathassain97880@gmail.com' && (
      <li>
        <NavLink to="/create">Create</NavLink>
      </li>
    )}
   
    {user && (
      <>
        <li>
          <NavLink to="/my-products">My Products</NavLink>
        </li>
        <li>
          <NavLink to="/my-bids">My Bids</NavLink>
        </li>
      </>
    )}
  </>
);
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-[1400px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{' '}
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className=" text-xl">
          Smart<span className="text-gradient">Deals</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user?.email === "mdrifathassain97880@gmail.com" && (
            <NavLink to="/post" className="btn btn-outline btn-accent text-primary outline-primary hover:bg-primary hover:text-white border-primary">Post</NavLink>
        )}
        {/* <NavLink to="/login" className="btn btn-outline outline-primary ">Login</NavLink> */}
        {user ? (
          <button onClick={handleSignOut} className="btn  btn-primary text-white ">
            Sign Out
          </button>
        ) : (
          <NavLink to="/register" className="btn  btn-primary text-white ">
            Register
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
