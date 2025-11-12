import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Container from '../components/Container/Container';
const RootLayout = () => {
  return (
    <div>
      <Container>
        <Navbar></Navbar>
        <Outlet />
      </Container>
    </div>
  );
};

export default RootLayout;
