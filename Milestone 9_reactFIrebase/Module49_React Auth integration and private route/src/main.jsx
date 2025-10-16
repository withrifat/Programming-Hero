import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './routes/Route.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Contexts/AuthContext/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
