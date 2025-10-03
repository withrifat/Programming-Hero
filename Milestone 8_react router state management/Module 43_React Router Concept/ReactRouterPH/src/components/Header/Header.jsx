import React from 'react';
import { Link, Links, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h3>This is a header</h3>
      <nav className="flex gap-4 justify-between ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/laptop">Laptop</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/users2">Users2</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
