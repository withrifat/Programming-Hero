import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Mobile = () => {
    const mobile = useLoaderData();
    return (
        <div>
            <h2>Mobile Details</h2>
            <p>{mobile.name}</p>
            <p>Price: ${mobile.price}</p>
        </div>
    );
};

export default Mobile;
