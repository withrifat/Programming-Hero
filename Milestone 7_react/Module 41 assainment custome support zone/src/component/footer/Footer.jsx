import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-content">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div>
          <h6 className="text-xl font-bold mb-4">CS — Ticket System</h6>
          <p className="text-sm leading-relaxed">
            This is a simple ticket management application built with React. It allows users to view a list of customer support tickets, move a ticket to an "In Progress" status, and finally mark it as "Resolved."
          </p>
        </div>
        <div>
          <h6 className="text-xl font-bold mb-4">Company</h6>
          <ul className="space-y-2">
            <li><a href="#" className="link link-hover">About Us</a></li>
            <li><a href="#" className="link link-hover">Our Mission</a></li>
            <li><a href="#" className="link link-hover">Contact Sales</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-xl font-bold mb-4">Services</h6>
          <ul className="space-y-2">
            <li><a href="#" className="link link-hover">Products & Services</a></li>
            <li><a href="#" className="link link-hover">Customer Stories</a></li>
            <li><a href="#" className="link link-hover">Download Apps</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-xl font-bold mb-4">Information</h6>
          <ul className="space-y-2">
            <li><a href="#" className="link link-hover">Privacy Policy</a></li>
            <li><a href="#" className="link link-hover">Terms & Conditions</a></li>
            <li><a href="#" className="link link-hover">Join Us</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-xl font-bold mb-4">Social Links</h6>
          <ul className="space-y-3 text-white">
            <li className="flex items-center space-x-2">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" className="w-5 h-5 invert"/>
              <span>@CS — Ticket System</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="w-5 h-5 invert"/>
              <span>@CS — Ticket System</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 invert"/>
              <span>@CS — Ticket System</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/maildotru.svg" alt="Email" className="w-5 h-5 invert"/>
              <span>support@cst.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm py-4 border-t border-white ">
        &copy; {new Date().getFullYear()} CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
