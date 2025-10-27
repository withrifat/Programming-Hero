import React, { useState, useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(() => {});
  }, []);

  const displayedCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <div className="container mt-10 mx-auto px-4 md:px-8 py-12 bg-gray-50">
      <h2 className="font-serif font-bold text-4xl text-center mb-12 text-gray-900 tracking-tight" data-aos="fade-up">
        Premium Toy Collection
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {displayedCategories.map((cat, index) => (
          <div
            key={cat.toyId}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src={cat.pictureURL}
                alt={cat.toyName}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-2">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 tracking-tight">{cat.toyName}</h3>
              <p className="text-sm text-gray-600 mb-4 font-medium">{cat.subCategory}</p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-emerald-600 font-bold text-xl">${cat.price.toFixed(2)}</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, index) =>
                    index < Math.round(cat.rating) ? (
                      <FaStar key={index} className="text-amber-400" size={18} />
                    ) : (
                      <FaRegStar key={index} className="text-gray-300" size={18} />
                    )
                  )}
                </div>
              </div>

              <button
                onClick={() => navigate(`/toy/${cat.toyId}`)}
                className="w-full bg-primary text-white py-3 rounded-xl text-sm font-semibold tracking-wide hover:bg-primary/80 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Discover Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {categories.length > 6 && (
        <div className="flex justify-center items-center mt-10" data-aos="fade-up">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-primary/80 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {showAll ? 'Show Less' : 'Explore More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;
