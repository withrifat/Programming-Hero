import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
  return (
    <div className='flex items-center justify-between container mx-auto'>
      <div className=""></div>
      <div className="flex gap-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3">
        <img src="/user.png" alt="/user.png" />
        <button className="btn btn-primary px-10">login</button>
      </div>
    </div>
  );
};

export default NavBar;
