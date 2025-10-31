import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetail = () => {
    const user = useLoaderData();
    console.log(user)
    return (
        <div>
            <h3>user Details</h3>
        </div>
    );
};

export default UserDetail;