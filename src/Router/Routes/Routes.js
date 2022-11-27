import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import MyAllProducts from "../../Pages/Dashboard/MyAllProducts/MyAllProducts";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import CategoryItems from "../../Pages/Home/CategoryItems/CategoryItems";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                path: '/category/:category_name',
                element: <PrivateRoute><CategoryItems/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.category_name}`)
            }
        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct/></SellerRoute>
            },
            {
                path: '/dashboard/myallproducts',
                element: <SellerRoute><MyAllProducts/></SellerRoute>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders/>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment/>,
                loader: ({params}) => fetch(`http://localhost:5000/myorder/${params.id}`)
            }
        ]
    }
])

export default routes;