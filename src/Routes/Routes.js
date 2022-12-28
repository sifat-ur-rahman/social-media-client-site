import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import AllPost from "../AllPost/AllPost";
import Details from "../Details/Details";
import Home from "../Home/Home";
import Main from "../Layout/Main";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path: '/allPost',
                element: <AllPost></AllPost>
            },
            {
                path: '/details',
                element: <Details></Details>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                
            }
        ]
    }
])