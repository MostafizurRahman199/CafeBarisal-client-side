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
import Contact from "../pages/Contact/Contact";
import Dashboard from "../layouts/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import MyCart from "../pages/Dashboard/MyCart";






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
                path: "/contact",
                element: (
                    <>
                        <Helmet>
                            <title>CafeBarisal - Contact</title>
                        </Helmet>
                        <Contact></Contact>
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
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "user-home",
            element: <UserHome></UserHome>, // Replace with your actual component, e.g., <UserHome />
          },
          {
            path: "reservation",
            element: <div>Reservation Page</div>, // Replace with your actual component, e.g., <Reservation />
          },
          {
            path: "payment-history",
            element: <div>Payment History Page</div>, // Replace with your actual component, e.g., <PaymentHistory />
          },
          {
            path: "my-cart",
            element: <MyCart></MyCart> // Replace with your actual component, e.g., <MyCart />
          },
          {
            path: "add-review",
            element: <div>Add Review Page</div>, // Replace with your actual component, e.g., <AddReview />
          },
          {
            path: "my-booking",
            element: <div>My Booking Page</div>, // Replace with your actual component, e.g., <MyBooking />
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