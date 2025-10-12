import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../component/Home";
import Register from "../component/Register";
import Login from "../component/Login";

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
    ],
  },
]);


export default router;