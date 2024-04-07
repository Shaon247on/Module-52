import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root.jsx";
import Login from "../Components/Login.jsx";
import Register from "../Components/Register.jsx";
import Orders from "../Components/Orders.jsx";
import Home from "../Components/Pages/Home.jsx";
import NewsDetails from "../Components/Pages/NewsDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async ()=>{
                    const res = await fetch('/news.json')
                    const data = await res.json()
                    return data
                }
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
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,

            }
        ]
    }
])
export default router