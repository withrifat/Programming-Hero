import React from 'react';
import { Link, Links } from 'react-router';

const Header = () => {
  const links = (
    <>
      {/* {["Home", "Listed Books", "Pages to Read"].map((item) => (
        <li
          key={item}
          className="mx-2 text-lg font-medium px-3 py-2 rounded-md cursor-pointer transition-all duration-200 border border-transparent hover:border-green-400 hover:text-green-500"
        >
          {item}
        </li>
      ))} */}
      <Link to="/">
        <li className="mx-2 text-lg font-medium px-3 py-2 rounded-md cursor-pointer transition-all duration-200 border border-transparent hover:border-green-400 hover:text-green-500">
          Home
        </li>
      </Link>
      <Link to="/about">
        <li className="mx-2 text-lg font-medium px-3 py-2 rounded-md cursor-pointer transition-all duration-200 border border-transparent hover:border-green-400 hover:text-green-500">
          About
        </li>
      </Link>
      <Link to="/readList">
        <li className="mx-2 text-lg font-medium px-3 py-2 rounded-md cursor-pointer transition-all duration-200 border border-transparent hover:border-green-400 hover:text-green-500">
          Read List
        </li>
      </Link>
      <Link to="/pageGraph">
        <li className="mx-2 text-lg font-medium px-3 py-2 rounded-md cursor-pointer transition-all duration-200 border border-transparent hover:border-green-400 hover:text-green-500">
          Page Graph
        </li>
      </Link>
    </>
  );

  return (
    <nav className="navbar bg-white shadow-md px-6 sticky top-0 z-50">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-3 rounded-box bg-white shadow-lg border border-gray-100"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <h2 className="text-2xl font-bold text-green-600 tracking-wide">Boi Poka</h2>
        </Link>
      </div>

      {/* Center (Desktop menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right (Buttons) */}
      <div className="navbar-end space-x-3">
        <button className="btn btn-outline btn-success px-5 text-lg font-medium">Sign In</button>
        <button className="btn btn-success px-5 text-lg font-medium text-white">Sign Up</button>
      </div>
    </nav>
  );
};

export default Header;
