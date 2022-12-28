import { createBrowserRouter } from "react-router-dom";
import AllPost from "../AllPost/AllPost";
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
            }
        ]
    }
])