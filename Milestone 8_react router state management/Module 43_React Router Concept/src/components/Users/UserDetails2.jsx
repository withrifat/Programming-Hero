import React from 'react';
import { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const user = use(userPromise);
    const {website, email, phone, address, name} = user;
    return (
        <div>
            <h4>Details for {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <h5>Address:</h5>
            <p>{address.street}, {address.city}, {address.zipcode}</p>
        </div>
    );
};

export default UserDetails2;