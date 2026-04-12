import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../components/Home/Home';
import AllProducts from '../components/AllProducts/AllProducts';
import Bids from '../components/Bids/Bids';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import MyProducts from '../pages/MyProducts';
import MyBids from '../pages/MyBids';
import ProductDetails from '../components/ProductDetails/ProductDetails';


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
            path: "/product-details/:id",
            loader: ({params})=> fetch(`http://localhost:3000/products/${params.id}`), 
            element: <ProductDetails></ProductDetails>,
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
        },
        {
            path: "/my-products",
            element: <MyProducts></MyProducts>,
        },
        {
            path: "/my-bids",
            element: <MyBids></MyBids>,
        }
    ]
  },
]);



export default router;