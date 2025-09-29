import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {website, email, phone, address, name} = user;
    return (
        <div>
            <h3>Users Details here </h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Address: {address}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;