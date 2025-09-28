import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import About from './components/About/About.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Laptop from './components/laptop/Laptop.jsx';
import Mobile from './components/Mobile/Mobile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { 
        path: 'mobiles/:mobileId', 
        Component: Mobile,
        loader: ({params}) => fetch(`/mobiles/${params.mobileId}.json`)
      },
      { path: 'laptop', Component: Laptop },
      { path: 'about', Component: About },
      { path: 'blogs', Component: Blogs },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
