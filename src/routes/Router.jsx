import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from '../components/Hero';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
