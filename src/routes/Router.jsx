import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from '../components/Hero';
import JobDetails from '../components/JobDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />,
  },
  {
    path: '/job',
    element: <JobDetails />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
