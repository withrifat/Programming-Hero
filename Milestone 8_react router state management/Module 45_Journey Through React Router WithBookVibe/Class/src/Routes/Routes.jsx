import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/Error/ErrorPage';
import { Component } from 'react';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';
import PagesGraph from '../pages/PagesGraph/PagesGraph';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('booksData.json'),
        path: '/',
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch('booksData.json'),
        Component: BookDetails,
      },
      {
        path: '/pageGraph',
        loader: () => fetch('booksData.json'),
        Component: PagesGraph,
      },
      {
        path: '/readList',
        loader: () => fetch('booksData.json'),
        Component: ReadList,
      },
    ],
  },
]);
