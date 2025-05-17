import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Sidebar from './components/sidebar'
import Home from './components/Home'
import PortfolioDetail from './components/portfolioDetail'
import ServiceDetail from './components/serviceDetail'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio/:slug",
        element: <PortfolioDetail />,
      },
      {
        path: "/services/:slug",
        element: <ServiceDetail />,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
