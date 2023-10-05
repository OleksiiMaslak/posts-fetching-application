import React from 'react';
import { useRouteError } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const ErrorPage = () => {
    const error = useRouteError();
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
        <h1>Oops!</h1>
        <p>Sorry, it looks like you don't have access</p>
        <p>Please go to Posts page and log in again</p>
    </div>
  )
}

export default ErrorPage