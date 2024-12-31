import { createBrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import Register from "../pages/Register";
import Login from "../pages/Login";

import ForgetPassword from "../pages/ForgetPassword";
import MainLayout from "../layouts/MainLayout";

import Profile from "../pages/Profile";

import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import MenuPage from "../pages/Menus/MenuPage";
import Order from "../pages/Order/Order";






const router = createBrowserRouter([    
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: (
                    <>
                        <Helmet>
                            <title>CafeBarisal - Home</title>
                        </Helmet>
                        <Home></Home>
                    </>
                ),
            },
            {
                path: "/menu",
                element: (
                    <>
                        <Helmet>
                            <title>CafeBarisal - Menu</title>
                        </Helmet>
                        <MenuPage></MenuPage>
                    </>
                ),
            },
            {
                path: "/order/:category",
                element: (
                    <>
                        <Helmet>
                            <title>CafeBarisal - Order Food</title>
                        </Helmet>
                        <Order></Order>
                    </>
                ),
            },
     
           {
                path: "/register",
                element: (
                    <>
                        <Helmet>
                            <title>CafeBarisal - Register</title>
                        </Helmet>
                        <Register />
                    </>
                ),
            },
           {
                path: "/volunteer-post-details/:id",
                element: (
                    <>
                        <Helmet>
                            <title>CafeBarisal - Volunteer Post Details</title>
                        </Helmet>
                        <PrivateRoute>
                         {/* something */}
                        </PrivateRoute>
                    </>
                ),
            },
            {
                path: "/ManageMyPostRequest",
                element: (
                    <>
                        <Helmet>
                            <title>CafeBarisal - My Volunteer Need Post</title>
                        </Helmet>
                        <PrivateRoute>
                         {/* something */}
                        </PrivateRoute>
                    </>
                ),
            },
            
           
           
           
         
            {
                path: "/login",
                element: (
                    <>
                        <Helmet>
                            <title>CafeBarisal - Login</title>
                        </Helmet>
                        <Login />
                    </>
                ),
            },
           
            {
                path: "/forgot-password",
                element: (
                    <>
                        <Helmet>
                            <title>CafeBarisal - Forgot Password</title>
                        </Helmet>
                        <ForgetPassword />
                    </>
                ),
            },
            {
                path: "/my-profile",
                element: (
                    <>
                        <Helmet>
                            <title>CafeBarisal - My Profile</title>
                        </Helmet>
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    </>
                ),
            },
            
           
           
            {
                path: "/update-profile",
                element: (
                    <>
                        <Helmet>
                            <title>CafeBarisal - Update Profile</title>
                        </Helmet>
                        <PrivateRoute>
                            <UpdateProfile />
                        </PrivateRoute>
                    </>
                ),
            },
           
           
        ],
    },
    {
        path: "*",
        element: (
            <>
                <Helmet>
                    <title>CafeBarisal - Error</title>
                </Helmet>
                <ErrorPage />
            </>
        ),
    },
    
  
]);

export default router;