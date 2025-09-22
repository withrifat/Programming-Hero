import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm rounded-2xl px-4">
      {/* Left - Logo */}
      <div className="flex-1 flex items-center">
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-12 w-auto" /> {/* bigger logo */}
        </a>
      </div>

      {/* Right - Menu */}
      <div className="flex-none flex items-center">
        {/* Mobile dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <button tabIndex={0} className="btn btn-ghost flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
            <li>
              <button className="btn btn-soft w-full flex items-center justify-between">
                <span>0</span> Coin
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>

        {/* Desktop menu */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex gap-2 items-center">
          <li className="flex items-center">
            <a>Home</a>
          </li>
          <li className="flex items-center">
            <a>Fixture</a>
          </li>
          <li className="flex items-center">
            <a>Teams</a>
          </li>
          <li className="flex items-center">
            <a>Schedules</a>
          </li>
          <li className="flex items-center">
            <button className="btn btn-soft flex items-center">
              <span>0</span> Coin
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
