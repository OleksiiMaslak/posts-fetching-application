import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import MyButton from '../../components/UI/button/MyButton';
import { actions } from '../../store/Authentification/Authentification.slice';
import { useDispatch } from 'react-redux';

const Layout = () => {

  const dispatch = useDispatch()
  const closeAccess = actions.closeAccess;

  const logout = () =>{
    dispatch(closeAccess)
    localStorage.removeItem('auth')
    window.location.reload()
  }
  return (
    <div>
        <div className='navbar'>
                <MyButton onClick={logout}>
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