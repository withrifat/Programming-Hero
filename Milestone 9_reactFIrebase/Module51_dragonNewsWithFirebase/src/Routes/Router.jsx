import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import CategoryNews from '../pages/CategoryNews';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthLayout from '../layout/AuthLayout';
import NewsDetails from '../pages/NewsDetails';

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
    path: '/news-details/:id',
    element: <NewsDetails></NewsDetails>,
    loader: ()=> fetch("/news.json"),
  },
  {
    path: '*',
    element: <h2>Page Not Found</h2>,
  },
]);
export default router;
