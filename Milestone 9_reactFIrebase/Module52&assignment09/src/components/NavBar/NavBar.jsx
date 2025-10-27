import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => toast.success("Logged out successfully!"))
      .catch(() => toast.error("Error logging out"));
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "All Products", path: "/products" },
    { name: "About", path: "/about" },
    ...(user ? [{ name: "Profile", path: "/profile" }] : []),
  ];

  const activeClass = "text-blue-700 border-b-2 border-blue-700 font-semibold";
  const defaultClass =
    "text-sm p-1.5 hover:text-blue-700 hover:border-b-2 hover:border-blue-300 transition-all duration-200 font-normal";

  return (
    <nav className="shadow-sm container mx-auto  my-3 shrink-0 top-0 z-50 bg-white rounded-2xl backdrop-blur-sm">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Brand Logo" className="h-13 w-auto bg-white" />
        </NavLink>
        <div className="flex items-center space-x-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `hidden lg:flex text-gray-800 ${defaultClass} ${isActive ? activeClass : ""}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3 relative">
          {user ? (
            <div
              className="relative flex items-center group"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <img
                src={user.photoURL || undefined}
                alt="User"
                onClick={() => navigate("/profile")}
                className="w-10 h-10 rounded-full border border-gray-300 object-cover cursor-pointer hover:scale-105 transition-transform"
              />
              {!user.photoURL && <FaUserCircle className="absolute w-10 h-10 text-gray-400 top-0 left-0" />}
              {showTooltip && (
                <div className="absolute right-0 mt-30 w-100 bg-white shadow-xl rounded-xl p-4 border border-gray-200 text-left z-500">
                  <div className="flex items-center space-x-3">
                    <img src={user.photoURL || undefined} alt="User" className="w-12 h-12 rounded-full object-cover" />
                    {!user.photoURL && <FaUserCircle className="w-12 h-12 text-gray-400" />}
                    <div>
                      <p className="font-semibold text-gray-800">{user.displayName || "Anonymous User"}</p>
                      <p className="text-gray-500 text-sm truncate">{user.email}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <button onClick={() => navigate("/profile")} className="text-sm text-blue-600 font-medium hover:underline">View Profile</button>
                    <button onClick={handleSignOut} className="text-sm text-red-500 font-medium hover:underline">Logout</button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/auth/login"
              className="px-5 py-2 text-sm bg-primary text-white font-medium rounded-full hover:bg-primary/80 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
