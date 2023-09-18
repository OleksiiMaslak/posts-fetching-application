import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import MyButton from '../../components/UI/button/MyButton';

const Layout = () => {

  const logout = () =>{

    // функция для удаления данных при выходе 
    // setIsAuth(false);
    // localStorage.removeItem('auth')
  }
  return (
    <div>
        <div className='navbar'>
                <MyButton>
                  Exit
                </MyButton>
                <div className='navbar__links'>
                    <NavLink to='/about'>About</NavLink>
                </div>
                <div className='navbar__links'>
                    <NavLink to='/posts'>Posts</NavLink>
                </div>
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout