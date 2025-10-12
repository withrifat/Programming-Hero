import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

const Root = () => {
    return (
      <div>
        <div className="container mx-auto">
          <NavBar></NavBar>
          <div className="h-screen">
            <Outlet></Outlet>
          </div>
        </div>
          <Footer></Footer>
      </div>
    );
};

export default Root;