import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CategoryItems from "../../Pages/Home/CategoryItems/CategoryItems";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/signin',
                element: <SignIn/>
            },
            {
                path: '/categoryitems/:id',
                element: <CategoryItems/>
            }
        ]

    }
])

export default routes;