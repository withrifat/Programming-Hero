import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Phones from './components/Phones';
import Phone from './components/Phone';
import Main from './components/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: "/phones",
        element: <Phones></Phones>,
        loader: ()=>fetch("http://localhost:5000/phones")
      },
      {
        path: "/phone",
        element: <Phone></Phone>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
