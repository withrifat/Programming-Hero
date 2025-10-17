import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children:[
            {
                index: true, 
                Component: Home,
            },
        ]
    }
])

export default router;