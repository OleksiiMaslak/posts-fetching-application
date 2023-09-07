import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Posts from './pages/Posts';
import About from "./pages/About";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import PostIdPage from "./pages/PostIdPage";

const router  = createBrowserRouter([
    {
        path : '/',
        errorElement: <ErrorPage/>,
        element: <Layout/>,
        children: [
            {
                element: <Home/>,
                index: true

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
            
        ]
    },

]);

export default router;