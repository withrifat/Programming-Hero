import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';

const Root = () => {
  return (
    <div className='container mx-auto'>
      {/* header section  */}
      <section className="my-7">
        <Header></Header>
        <section className="w-11/12 mx-auto my-3 ">
          <LatestNews></LatestNews>
        </section>
        <nav>
          <NavBar></NavBar>
        </nav>
      </section>
      {/* body section  */}
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
      {/* footer section  */}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Root;
