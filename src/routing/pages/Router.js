import React from 'react';
import Home from './Home';
import Posts from './Posts';
import PostIdPage from './PostIdPage';
import About from './About';
import Login from './Login';


 const privateRoutes = [
    {
        element: <Home/>,
        index: true,

    },
    {
        path : '/posts',
        element: <Posts/>,
        
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/posts/:id',
        element: <PostIdPage/>
    },
    
];

const publicRoutes = [
    {
        element: <Login/>,
        index: true,
    },
        
];

export const privateRoutesArray = [{key: 200}];
 (function createRoutes () {
    
    for (let i = 0; i < privateRoutes.length; i++) {
        
        const el = privateRoutes[i];
        if (i == 0 ){

            privateRoutesArray.push({ element : el.element, index: true})
            
        } else {
            privateRoutesArray.push({ path : el.path, element : el.element})
        }
        
        
    };

    return privateRoutesArray;
})()


export const publicRoutesArray = [{key: 250}, {path: '/', element: <Login/>}];







