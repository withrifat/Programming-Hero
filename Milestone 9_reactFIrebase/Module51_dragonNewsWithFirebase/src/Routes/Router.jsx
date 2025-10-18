import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import CategoryNews from '../pages/CategoryNews';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthLayout from '../layout/AuthLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
        {
            path:"",
            element: <Home></Home>,
        },
        {
            path: "/category/:id",
            element: <CategoryNews></CategoryNews>,
            loader: ()=> fetch("/news.json"),
        },
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path: "",
        element: <Login></Login>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: 'news',
    element: <h2>News Layout</h2>,
  },
  {
    path: '*',
    element: <h2>Page Not Found</h2>,
  },
]);
export default router;
