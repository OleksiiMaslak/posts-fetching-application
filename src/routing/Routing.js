import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import { privateRoutesArray, publicRoutesArray } from './pages/Router';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/context";
import Loader from "../components/UI/Loader/Loader";

function Routing() {

    // то как по идее должен был работать useContext
    // const {isAuth, isLoading} = useContext(AuthContext);
    // if (isLoading) {
    //     return <Loader/>
    // }

const [isAuth, setIsAuth] = useState(false)
useEffect(() => {
    setTimeout( () => {
        setIsAuth(true);
        return isAuth;
    }, 5000 )
}, [])


  const router = createBrowserRouter(isAuth ?
    [{
      path: '/',
      errorElement: <ErrorPage />,
      element: <Layout />,
      children: privateRoutesArray
    }] : [{
      path: '/',
      errorElement: <ErrorPage />,
      element: <Layout />,
      children: publicRoutesArray
    }]
  );

  return router;
}

export default Routing;
