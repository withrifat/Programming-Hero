import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from '../../hooks/useTitle';
import Slider from './Slider';
import PopularToys from './PopularToys';
import FindToy from './FindToy';

const Home = () => {
  useTitle('Home');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div data-aos="fade-up">
        <Slider />
      </div>
      <div className="py-12 bg-white" data-aos="fade-up" data-aos-delay="100">
        <FindToy />
      </div>
      <div className="py-12 bg-gray-50" data-aos="fade-up" data-aos-delay="200">
        <PopularToys />
      </div>
    </div>
  );
};

export default Home;