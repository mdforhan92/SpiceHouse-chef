import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import RecepieLayout from "../Layouts/RecepieLayout";
import RecepieDetails from "../pages/RecepieDetails/RecepieDetails/RecepieDetails";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import BlogQues from "../pages/shared/BlogQues/BlogQues";
import Error from "../pages/shared/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element:<Navigate to="/chefData"></Navigate>
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
                path: '/blog',
                element: <BlogQues></BlogQues>
            }
        ]
    },
    {
        path: 'chefData',
        element: <Main></Main>,
        children: [
            
        ]
    },
    {
        path: '/chefData/:id',
        element: <RecepieLayout></RecepieLayout>,
        children:[
            {
                path: '',
                element: <PrivateRoutes><RecepieDetails></RecepieDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`https://assignment-10-server-mdforhan92.vercel.app/chefData/${params.id}`)
            }
        ]
    },
    {   
        path: '*',
        element:<Error></Error>
    }
])
export default router;