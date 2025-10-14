import { createBrowserRouter } from "react-router";
import root from "../Layout/root";
import Home from "../components/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

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
    ]
  },
]);

export default router;