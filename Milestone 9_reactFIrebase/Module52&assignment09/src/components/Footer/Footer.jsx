import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-cover bg-center bg-no-repeat text-gray-800" style={{ backgroundImage: "url('/footer.jpg')", minHeight: '400px' }}>
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      <div className="relative max-w-7xl mx-auto py-16 px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
        <div>
          <img src="/logo.png" alt="ToyTopia Logo" className="h-[90px] mb-4" />
          <p className="text-gray-700 text-sm mb-6">ToyTopia – A vibrant online marketplace for kids’ toys, helping families discover local toy sellers.</p>
          <div className="flex space-x-4">
            {[
              { href: '#', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/instagram.svg', alt: 'Instagram' },
              { href: '#', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/twitter.svg', alt: 'Twitter' },
              { href: '#', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/facebook.svg', alt: 'Facebook' },
              { href: '#', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/pinterest.svg', alt: 'Pinterest' },
            ].map((item, idx) => (
              <a key={idx} href={item.href} className="transition hover:scale-110">
                <img src={item.src} alt={item.alt} className="w-6 h-6 opacity-70 hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {['Home','My Profile','Terms & Conditions','Privacy Policy'].map((link, idx) => (
              <li key={idx}><a href="#" className="hover:text-blue-600 transition">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Latest Updates</h4>
          <p className="text-sm text-gray-700">🚩 All updates regarding the project and assignments will be declared here.</p>
          <p className="text-sm text-gray-700 mt-2">Assignment Category: <span className="font-medium">Assignment-09_category_Orchid</span></p>
        </div>
      </div>
      <div className="relative z-10 text-center text-gray-600 text-sm mt-10 pb-6 border-t border-gray-300">© 2025 ToyTopia. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
