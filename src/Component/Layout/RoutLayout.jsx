import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../UI/MainNavigation';
import Footer from '../../pages/Footer';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default RootLayout;