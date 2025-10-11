import { createBrowserRouter } from "react-router"; 
import Root from "../Layout/Root";
import Home from "../components/Home";

const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        children:[
            {
                index: true,
                Component: Home,
            }
        ]
    }
])

export default router;