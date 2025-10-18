import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Login from '../pages/Login';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-4'>
                <NavBar></NavBar>
            </header>
            <Outlet>
                how to manager here login and register 
            </Outlet>

        </div>
    );
};

export default AuthLayout;