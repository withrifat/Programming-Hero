import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import NavBar from '../NavBar/NavBar';
import { FiTruck, FiLogIn, FiUserPlus } from 'react-icons/fi';
import { AuthContext } from '../../Contexts/AuthContext';

const Header = () => {
  const { user } = useContext(AuthContext);
  const activeClass = "text-cyan-200 font-semibold";

  return (
    <div>
      {!user && (
        <div className="w-full bg-primary text-white shadow-lg">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <FiTruck className="h-5 w-5 md:h-6 md:w-6 text-yellow-300" />
              <span className="font-medium tracking-wide">Free shipping with over $150</span>
            </div>
            <div className="flex items-center space-x-4">
              <NavLink
                to="/auth/login"
                className={({ isActive }) =>
                  `flex items-center space-x-1 transition duration-150 ${isActive ? activeClass : ""}`
                }
              >
                <FiLogIn className="h-4 w-4 hidden sm:block" />
                <span>Login</span>
              </NavLink>

              <NavLink
                to="/auth/register"
                className={({ isActive }) =>
                  `flex items-center space-x-1 font-semibold transition duration-150 ${isActive ? activeClass : ""}`
                }
              >
                <FiUserPlus className="h-4 w-4 hidden sm:block" />
                <span>Register</span>
              </NavLink>
            </div>
          </div>
          <div className="w-full h-1 bg-cyan-800"></div>
        </div>
      )}

      <NavBar />
    </div>
  );
};

export default Header;
