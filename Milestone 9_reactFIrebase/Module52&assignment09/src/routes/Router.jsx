import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../Layout/AuthLayout';
import Root from '../Layout/Root';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PassWordReset from '../pages/PassWordReset';
import Profile from '../pages/Profile';
import About from '../pages/About';
import Errorpage from '../components/Error/Errorpage';
import Home from '../components/Home/Home';
import Products from '../pages/Products';
import ToyDetails from '../components/ToyDetails';
import PrivateRoute from './PrivateRote';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '',
        element: <Home></Home>,
      },
      {
        path: 'products',
        element: <Products></Products>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'toy/:id',
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: 'passwordreset',
        element: <PassWordReset></PassWordReset>,
      },
    ],
  },
  {
    path: '*',
    element: <Errorpage></Errorpage>,
  },
]);

export default router;
