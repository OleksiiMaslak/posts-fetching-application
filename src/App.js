import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Routing from './routing/Routing';


import './styles/App.css';




function App() {


    
    return(
        <>

            <RouterProvider router={Routing()}/>
        </>
    )

}

export default App;