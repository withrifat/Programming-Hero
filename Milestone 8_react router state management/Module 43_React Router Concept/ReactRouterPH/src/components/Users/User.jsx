import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from './UserDetails2';

const User = ({ user }) => {
    const [showInfo, setShowInfo] = useState(false);

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
        .then(res => res.json());

    return (
        <div className='border p-4 m-4 rounded-2xl'>
            <h3 className=''>{user.name}</h3>
            <p className=''>Email: {user.email}</p>
            <p className=''>Phone: {user.phone}</p>
            <Link to={`/users/${user.id}`} className='text-blue-600 underline'>Show Details </Link>
            <button onClick={() => setShowInfo(!showInfo)} className='btn button '> {showInfo ? "Hide" : "Show"} Detail Info</button>
            {
                showInfo && <Suspense fallback={<div>Loading...</div>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
        </div>
    );
};

export default User;