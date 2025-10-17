import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className="flex gap-3 bg-base-200 p-2 items-center ">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className='flex gap-5 ' pauseOnHover>
        <p className="text-bold ">
          Latest Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quia.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
