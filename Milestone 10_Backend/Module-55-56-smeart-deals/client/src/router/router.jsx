import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../components/Home/Home";
import AllProducts from "../components/AllProducts/AllProducts";
import Register from "../components/Register/Register";
import MyProduct from "../components/MyProducts/MyProduct";
import MyBids from "../components/MyBids/MyBids";

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
            path: 'allproducts',
            Component: AllProducts,
        },
        {
          path: 'register',
          Component: Register
        },
        {
          path: 'myProducts',
          element: <MyProduct></MyProduct>,
        },
        {
          path: 'myBids',
          element: <MyBids></MyBids>,
        },
    ]
  },
]);

export default router;