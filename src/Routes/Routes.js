import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import AllPost from "../AllPost/AllPost";
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
                element: <Home></Home>,
                loader: () => fetch (`http://localhost:5000/3posts`)
            },
            {
                path: '/allPost',
                element: <AllPost></AllPost>,
                loader: () => fetch (`http://localhost:5000/viewPost`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch (`http://localhost:5000/details/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About> ,
                loader: () => fetch (`http://localhost:5000/about`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
])