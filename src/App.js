import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Routing from './routing/Routing';
import { AuthContext } from './context/context';

import './styles/App.css';




function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')){
            setIsAuth(true)
        }
        setIsLoading(false)
    }, [])

    
    return(
        <AuthContext.Provider value={{
            isAuth, 
            setIsAuth,
            isLoading
        }}>

            <RouterProvider router={Routing()}/>
        </AuthContext.Provider>
    )

}

export default App;