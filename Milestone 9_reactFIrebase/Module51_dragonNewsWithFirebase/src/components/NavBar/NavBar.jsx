import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut=()=>{
    toast.success('LogOut successful!');
    signOutUser();
  }

  return (
    <div className="flex items-center justify-between container mx-auto">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className=""> 
        {user ? (<span>{user.email}</span>) : (<span></span>)

        }
      </div>
      <div className="flex gap-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3 items-center">
        {user ? (
          <>
            <img src="/user.png" alt="user" className="w-8 h-8 rounded-full" />
            <button className="btn btn-primary px-4" onClick={handleSignOut} >Sign Out</button>
          </>
        ) : (
          <NavLink to="/auth/login" className="btn btn-primary px-10">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
