import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import AllPost from "../AllPost/AllPost";
import Comment from "../Details/Comment";
import Details from "../Details/Details";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SignUp from "../SignUp/SignUp";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<PrivateRoute><Home/></PrivateRoute> ,
                loader: () => fetch (`https://social-media-server-gray.vercel.app/3posts`)
            },
            {
                path: '/allPost',
                element:<PrivateRoute><AllPost/></PrivateRoute> ,
                loader: () => fetch (`https://social-media-server-gray.vercel.app/viewPost`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch (`https://social-media-server-gray.vercel.app/details/${params.id}`),
               
            },
            {
                path: '/about',
                element: <About></About> ,
                loader: () => fetch (`https://social-media-server-gray.vercel.app/about`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/comment/:id',
                element: <Comment></Comment>,
                loader: ({params}) => fetch (`https://social-media-server-gray.vercel.app/comment/${params.id}`),
            }
        ]
    }
])