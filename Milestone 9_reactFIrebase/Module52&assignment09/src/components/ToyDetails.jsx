import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FaStar, FaRegStar, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import 'aos/dist/aos.css';
import AOS from 'aos';

const ToyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [toy, setToy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  useTitle('Toy Details');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const fetchToy = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch toy data');
        }
        const data = await response.json();
        const foundToy = data.find((item) => item.toyId === parseInt(id));

        if (!foundToy) {
          throw new Error('Toy not found');
        }
        setToy(foundToy);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchToy();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
      setShowSuccess(true);
      setTimeout(() => {
        setFormData({ name: '', email: '' });
        setShowSuccess(false);
      }, 3000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50" data-aos="fade-in">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg font-medium">Loading toy details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50" data-aos="fade-up">
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
          <div className="text-red-500 text-xl font-semibold mb-6">⚠️ {error}</div>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
          >
            <FaArrowLeft /> Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-3 rounded-full hover:bg-blue-200 transition duration-300 mb-8 shadow-sm"
        data-aos="fade-right"
      >
        <FaArrowLeft /> Back to Products
      </button>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-10" data-aos="fade-up">
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden transform hover:scale-[1.02] transition duration-500">
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="w-full h-80 object-cover rounded-t-3xl"
            />
            <div className="p-8">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-3">{toy.toyName}</h1>
              <p className="text-blue-600 text-lg font-medium mb-4">{toy.subCategory}</p>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, index) =>
                    index < Math.round(toy.rating) ? (
                      <FaStar key={index} className="text-yellow-400 h-6 w-6" />
                    ) : (
                      <FaRegStar key={index} className="text-gray-300 h-6 w-6" />
                    )
                  )}
                </div>
                <span className="text-gray-600 font-medium">({toy.rating}/5)</span>
              </div>

              <div className="text-4xl font-bold text-blue-600 mb-6">${toy.price.toFixed(2)}</div>

              <p className="text-gray-700 text-lg leading-relaxed">{toy.description}</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-3xl shadow-sm p-8" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Seller Information</h2>
            <div className="space-y-5">
              <div>
                <span className="font-semibold text-gray-700 text-lg">Seller Name:</span>
                <p className="text-gray-600 text-base">{toy.sellerName}</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700 text-lg">Email:</span>
                <p className="text-gray-600 text-base">{toy.sellerEmail}</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700 text-lg">Available Quantity:</span>
                <p className="text-gray-600 text-base">{toy.availableQuantity} units</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-8" data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Try This Toy</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 transition duration-200"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 transition duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-sm"
              >
                Try Now
              </button>
            </form>

            {showSuccess && (
              <div
                className="mt-6 p-5 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg flex items-center"
                data-aos="fade-in"
              >
                <div className="shrink-0">
                  <svg className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">
                    Thank you, {formData.name}! We'll contact you soon about trying this toy.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;