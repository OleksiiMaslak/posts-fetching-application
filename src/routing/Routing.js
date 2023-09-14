import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import {privateRoutesArray, publicRoutesArray} from './pages/Router'


console.log(publicRoutesArray);

const isAuth = true;

const router  = createBrowserRouter( isAuth ? 
    [{
        path : '/',
        errorElement: <ErrorPage/>,
        element: <Layout/>,
        children: privateRoutesArray
    }] : [{
            path : '/',
            errorElement: <ErrorPage/>,
            element: <Layout/>,
            children: publicRoutesArray
        }]
);

export default router;