import React from 'react';
import { useParams } from 'react-router-dom';
const User = () => {
    const { userid } = useParams();
    return (
        <div className='text-3xl font-bold text-center my-20'>
            User : {userid}
        </div>
    );
};

export default User;