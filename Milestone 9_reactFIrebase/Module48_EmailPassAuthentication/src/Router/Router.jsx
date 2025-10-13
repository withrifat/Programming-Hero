import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../component/Home";
import Register from "../component/Register";
import Login from "../component/Login";
import ForgetPassword from "../component/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "forgetpassword",
        Component: ForgetPassword,
      },
    ],
  },
]);


export default router;