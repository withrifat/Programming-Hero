import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
    return (
        <div className='border p-4 m-4 rounded-2xl'>
            <h3 className=''>{user.name}</h3>
            <p className=''>Email: {user.email}</p>
            <p className=''>Phone: {user.phone}</p>
            <Link to={`/users/${user.id}`} className='text-blue-600 underline'>Show Details </Link>
        </div>
    );
};

export default User;