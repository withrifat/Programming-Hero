import { createBrowserRouter } from "react-router-dom";
import Root from '../pages/Root/Root';
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
          index: true,
          loader:()=> fetch('booksData.json'),
          path: "/",
          Component: Home,
        }
    ]
  },
]);
