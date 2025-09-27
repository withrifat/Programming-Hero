import React from 'react';

const NavBar = () => {
  const handleRefresh = () => {
  window.location.reload();
  };
  return (
    <div className="container mx-auto flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      <div className="text-lg sm:text-xl font-bold text-gray-900">
        CS — <span className="font-semibold">Ticket System</span>
      </div>
      <div className="flex items-center">
        <ul className="hidden md:flex space-x-6 text-sm text-gray-700 font-medium">
          {['Home', 'FAQ', 'Changelog', 'Blog', 'Download', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="relative transition hover:text-purple-600 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={handleRefresh}  className="ml-6 px-4 py-2 rounded-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transform transition">
          + New Ticket
        </button>
      </div>
    </div>
  );
};

export default NavBar;
