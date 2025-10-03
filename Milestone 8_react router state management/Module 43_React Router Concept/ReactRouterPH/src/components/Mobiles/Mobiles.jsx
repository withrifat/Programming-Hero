import React from 'react';
import { Link } from 'react-router-dom';

const Mobiles = () => {
    return (
        <div>
            <h2>This is from Mobiles </h2>
            <ul>
                <li><Link to="/mobiles/1">iPhone 15</Link></li>
                <li><Link to="/mobiles/2">Samsung Galaxy S24</Link></li>
            </ul>
        </div>
    );
};

export default Mobiles;