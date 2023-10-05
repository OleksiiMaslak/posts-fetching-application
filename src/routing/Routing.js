import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import { privateRoutesArray, publicRoutesArray } from './pages/Router';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';


function Routing() {

  const isAuth = useSelector(state => state)


  const router = createBrowserRouter((isAuth || window.localStorage.auth) ?
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
