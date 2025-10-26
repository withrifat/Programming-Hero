import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <Link to="/phones">Phones</Link>
            <Link to="/phone">Phone</Link>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Header;