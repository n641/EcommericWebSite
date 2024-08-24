import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components';

function Layout() {
  return (
    <div>
      <NavBar />
      <div className='py-24'>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
