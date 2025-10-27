import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  const images = ['/banner1.png','/banner2.png','/banner3.png'];

  return (
    <div className="w-full h-auto relative overflow-hidden z-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
        pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Banner ${index + 1}`} className="w-full h-full object-cover"/>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-6 z-10 cursor-pointer bg-white/30 hover:bg-white/60 p-4 rounded-full transition duration-300 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-6 z-10 cursor-pointer bg-white/30 hover:bg-white/60 p-4 rounded-full transition duration-300 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          </svg>
        </div>
        <div className="swiper-pagination-custom absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-3"></div>
      </Swiper>
    </div>
  );
};

export default Slider;
