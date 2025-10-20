import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import CategoryNews from '../pages/CategoryNews';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthLayout from '../layout/AuthLayout';
import NewsDetails from '../pages/NewsDetails';
import PassWordReset from '../pages/PassWordReset';
import PrivateRoutes from './PrivateRoutes';
import Loading from '../components/Loading';

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
            hydrateFallbackElement: <Loading></Loading>,
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
      {
        path: "passwordreset",
        element: <PassWordReset></PassWordReset>,
      },
    ],
  },
  {
    path: '/news-details/:id',
    element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
    loader: ()=> fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: '*',
    element: <h2>Page Not Found</h2>,
  },
]);
export default router;
