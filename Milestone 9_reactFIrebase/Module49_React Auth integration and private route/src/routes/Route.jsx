import { createBrowserRouter } from "react-router-dom";
import root from "../Layout/root";
import Home from "../components/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Orders from "../components/Order/Orders";
import Profile from "../components/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: root ,
    children:[
        {
            index: true,
            Component: Home,
        },
        {
            path: "login",
            Component: Login,
        },
        {
            path: "register",
            Component: Register,
        },
        {
            path: "orders",
            element: <PrivateRoutes>
              <Orders></Orders>
            </PrivateRoutes>
        },
        {
            path: "profile",
            element: <PrivateRoutes> <Profile></Profile> </PrivateRoutes>
        },
        {
            path: "dashboard",
            element: <PrivateRoutes> <Dashboard></Dashboard> </PrivateRoutes>
        },
    ]
  },
]);

export default router;