import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet>
                
            </Outlet>
        </div>
    );
};

export default RootLayout;