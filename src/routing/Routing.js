import { createBrowserRouter } from "react-router-dom";
import Posts from './pages/Posts';
import About from "./pages/About";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

const router  = createBrowserRouter([
    {
        path : '/',
        errorElement: <ErrorPage/>,
        element: <Layout/>,
        children: [
            {
                element: <Posts/>,
                index: true
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    },
    {
        path : '/about',
        element: <About/>
    }
]);

export default router;