import React, { use } from 'react';
import { NavLink, Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut =()=>{
    signOutUser()
    .then(()=> {
      console.log("Sign out successfully ")
    })
    .catch((error)=> {
      console.log(error);
    })
  }
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-base transition-colors ${isActive ? 'text-primary font-medium' : 'text-base-content'}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `text-base transition-colors ${isActive ? 'text-primary font-medium' : 'text-base-content'}`
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            `text-base transition-colors ${isActive ? 'text-primary font-medium' : 'text-base-content'}`
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden" aria-label="menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <NavLink to="/" className="text-2xl font-bold text-primary hover:text-primary-focus transition-colors">
          MyApp
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? <a onClick={handleSignOut} className="btn">Sign Out</a> : <Link to="/login">Login</Link>}
        </div>
    </div>
  );
};

export default Navbar;
