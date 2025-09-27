import React from 'react';

const TaskStatus = ({ data, handleComplete }) => {
    const {  title } = data;
    return (
        <div className='w-full mx-auto shadow-lg p-4 rounded-lg bg-indigo-100 border border-indigo-200'>
            <h2 className="text-md font-semibold text-gray-800 mb-3">{title}</h2>
            <button 
                onClick={() => handleComplete(data)} 
                className='w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300'>
                Complete
            </button>
        </div>
    );
};

export default TaskStatus;