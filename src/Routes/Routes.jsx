import {createBrowserRouter} from "react-router-dom";
import Root from "../Components/Root.jsx";
import Login from "../Components/Login.jsx";
import Register from "../Components/Register.jsx";
import Orders from "../Components/Orders.jsx";
import Home from "../Components/Pages/Home.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            }
        ]
    }
])
export default router