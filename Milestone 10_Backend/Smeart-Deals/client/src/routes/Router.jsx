import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../components/Home/Home';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import MyProducts from '../pages/MyProducts';
import MyBids from '../pages/MyBids';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import AllProducts from '../pages/AllProducts';
import AllBids from '../pages/AllBids';
import PostProducts from '../pages/PostProducts';



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
            path: "/AllBids",
            Component: AllBids,
        },
        {
            path: "/post",
            Component: PostProducts,
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