import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import {routesArray} from './pages/Router'




const router  = createBrowserRouter([
    {
        path : '/',
        errorElement: <ErrorPage/>,
        element: <Layout/>,
        children: routesArray
    },

]);

export default router;