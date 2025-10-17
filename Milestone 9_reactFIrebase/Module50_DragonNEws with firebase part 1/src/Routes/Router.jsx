import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import CategoryNews from '../pages/CategoryNews';
import Home from '../pages/Home';

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
    element: <h2>Authentication Layout</h2>,
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
