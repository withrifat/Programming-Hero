import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
