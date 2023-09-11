import React from 'react';
import Home from './Home';
import Posts from './Posts';
import PostIdPage from './PostIdPage';
import About from './About'


export const routes = [
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

export const routesArray = [{key: 200}];
 (function createRoutes () {
    
    for (let i = 0; i < routes.length; i++) {
        
        const el = routes[i];
        if (i == 0 ){

            routesArray.push({ element : el.element, index: true})
            
        } else {
            routesArray.push({ path : el.path, element : el.element})
        }
        
        
    };

    return routesArray;
})()






