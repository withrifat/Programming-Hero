import React from 'react';
import Header from '../components/Header.jsx/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
