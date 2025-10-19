import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink } from 'react-router';

const NewsDetailsCard = ({news}) => {
    return (
        <div className='space-y-5 p-10 rounded'>
            <img className='w-full h-full object-cover rounded ' src={news.image_url} alt="" />
            <h2 className="text-3xl font-bold">{news.title}</h2>
            <p> {news.details}</p>
            <NavLink to={`/category/${news.category_id}`} className='btn btn-secondary '> <FaArrowLeft /> All news in the category</NavLink>
        </div>
    );
};

export default NewsDetailsCard;