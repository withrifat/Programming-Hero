import React, { useEffect } from 'react';
import { FaHeart, FaUsers, FaShoppingCart, FaShieldAlt, FaStar, FaSearch, FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    document.title = 'ToyTopia | About Us';
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <FaSearch className="text-3xl text-primary" />,
      title: "Browse by Categories",
      description: "Find toys by age, type, or interest for your child."
    },
    {
      icon: <FaShoppingCart className="text-3xl text-primary" />,
      title: "Detailed Toy Info",
      description: "Explore seller details, ratings, and reviews."
    },
    {
      icon: <FaStar className="text-3xl text-primary" />,
      title: "Feedback & Ratings",
      description: "Read and share reviews for informed decisions."
    },
    {
      icon: <FaUsers className="text-3xl text-primary" />,
      title: "Secure Authentication",
      description: "Safe login for a personalized experience."
    },
    {
      icon: <FaLock className="text-3xl text-primary" />,
      title: "Protected Routes",
      description: "Access exclusive features securely."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-primary" />,
      title: "Safe Marketplace",
      description: "Shop confidently with verified sellers."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About ToyTopia</h1>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Welcome to ToyTopia!</h2>
            <p className="text-gray-600 text-center">
              ToyTopia is your local kids' toy store, connecting families with trusted sellers for fun, educational toys.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-primary rounded-2xl shadow-lg p-6 text-white" data-aos="fade-right">
            <div className="flex items-center mb-4">
              <FaHeart className="text-3xl mr-3" />
              <h3 className="text-xl font-bold">Our Mission</h3>
            </div>
            <p>
              To create a safe, fun marketplace for families to discover quality toys from local sellers, fostering creativity and community.
            </p>
          </div>

          <div className="bg-primary rounded-2xl shadow-lg p-6 text-white" data-aos="fade-left">
            <div className="flex items-center mb-4">
              <FaUsers className="text-3xl mr-3" />
              <h3 className="text-xl font-bold">Our Vision</h3>
            </div>
            <p>
              To be the leading platform connecting families with local toy sellers, supporting businesses and enriching playtime.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8" data-aos="fade-up">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center" data-aos="fade-up">
          <div className="bg-primary rounded-2xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Explore?</h3>
            <p className="mb-6">
              Join families discovering amazing toys and supporting local sellers with ToyTopia!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink
                to="/products"
                className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105"
              >
                Explore Toys
              </NavLink>
              <NavLink
                to="/auth/register"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-transform duration-300 transform hover:scale-105"
              >
                Join ToyTopia
              </NavLink>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-gray-800 mb-3">Support Local, Shop Local</h4>
            <p className="text-gray-600">
              Every purchase on ToyTopia supports local toy sellers, building a stronger community for our kids.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;