import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <div className='navbar'>
                <div className='navbar__links'>
                    <NavLink to='/about'>About</NavLink>
                </div>
                <div className='navbar__links'>
                    <NavLink to='/'>Posts</NavLink>
                </div>
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout