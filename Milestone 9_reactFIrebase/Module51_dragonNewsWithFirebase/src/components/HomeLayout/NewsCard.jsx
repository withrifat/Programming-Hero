import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';

const NewsCard = ({ news }) => {
  return (
    <div className="p-5 ">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        {/* Author Info */}
        <div className="flex items-center space-x-3">
          <img src={news.author.img} alt={news.author.name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h3 className="text-gray-800 font-semibold text-md">{news.author.name || 'Unknown Author'}</h3>
            <p className="text-gray-500 text-xs">{news.author.published_date || 'No date available'}</p>
          </div>
        </div>
        <div className="flex gap-3 items-center text-gray-600">
          <CiBookmark size={28} className="cursor-pointer hover:text-gray-800" />
          <CiShare2 size={28} className="cursor-pointer hover:text-gray-800" />
        </div>
      </div>

      {/* Content Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{news.title}</h2>

        <img src={news.thumbnail_url} alt={news.title} className="w-full h-64 object-cover rounded-md mb-4" />

        <p className="text-gray-700 leading-relaxed text-sm">
          {news.details.length > 250 ? news.details.slice(0, 250) + '...' : news.details}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
