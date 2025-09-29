import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../Sidebar/SideBar';
const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className="flex justify-between p-30 gap-5 items-center">
        <SideBar></SideBar>
        {isNavigating && <h1 className='text-3xl text-center'>Loading...</h1>}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
