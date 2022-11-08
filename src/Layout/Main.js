import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Nav from '../Pages/Nav/Nav';

const Main = () => {
    return (
      <div>
        <Nav></Nav>
        <div className='md:mx-20'>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Main;