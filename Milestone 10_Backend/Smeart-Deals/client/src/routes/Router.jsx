import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../components/Home/Home';
import AllProducts from '../components/AllProducts/AllProducts';
import Bids from '../components/Bids/Bids';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: "/AllProducts",
            Component: AllProducts,
        },
        {
            path: "/register",
            Component: Register,
        },
        {
            path: "/login",
            Component: Login,
        },
        {
            path: "/bids",
            Component: Bids,
        }
    ]
  },
]);



export default router;