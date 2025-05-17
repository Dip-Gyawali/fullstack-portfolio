import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideNav from "./admin/component/sidebar";
import UserIndex from "./admin/user/index";
import CreateUser from "./admin/user/create";
import BasicInfoIndex from "./admin/basicInfo/index";
import BasicInfoEdit from "./admin/basicInfo/edit";
import CreateSkill from "./admin/skills/create";
import SkillsIndex from "./admin/skills/index";
import CreateService from "./admin/service/create";
import ServiceIndex from "./admin/service/index";
import TestimonialIndex from "./admin/testimonial/index";
import CreateTestimonial from "./admin/testimonial/create";
import ContactIndex from "./admin/contact/index";
import PortfolioIndex from "./admin/portfolio/index";
import CreatePortfolio from "./admin/portfolio/create";
import PortfolioCatIndex from "./admin/portfolioCat/index";
import CreatePortfolioCat from "./admin/portfolioCat/create";
import EditUser from "./admin/user/edit";
import EditSkill from "./admin/skills/edit";
import EditTestimonial from "./admin/testimonial/edit";
import EditService from "./admin/service/edit";
import EditPortfolioCat from "./admin/portfolioCat/edit";
import CreateBasicInfo from "./admin/basicInfo/create";
import RolesIndex from "./admin/roles/index";
import CreateRole from "./admin/roles/create";
import EditRole from "./admin/roles/edit";
import PortfolioEdit from "./admin/portfolio/edit";
import ProtectedRoute from './context/ProtectedRoute';
import Login from './admin/component/Login';
import { AuthProvider } from './context/AuthContext';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <SideNav />
      </ProtectedRoute>
    ),
    children: [
      { path: 'user', element: <UserIndex /> },
      { path: 'user/create', element: <CreateUser /> },
      { path: 'user/:id/edit', element: <EditUser /> },
      { path: 'basic-info', element: <BasicInfoIndex /> },
      { path: 'basic-info/create', element: <CreateBasicInfo /> },
      { path: 'basic-info/:id/edit', element: <BasicInfoEdit /> },
      { path: 'roles', element: <RolesIndex /> },
      { path: 'roles/create', element: <CreateRole /> },
      { path: 'roles/:id/edit', element: <EditRole /> },
      { path: 'skills', element: <SkillsIndex /> },
      { path: 'skills/create', element: <CreateSkill /> },
      { path: 'skills/:id/edit', element: <EditSkill /> },
      { path: 'service', element: <ServiceIndex /> },
      { path: 'service/create', element: <CreateService /> },
      { path: 'service/:id/edit', element: <EditService /> },
      { path: 'testimonials', element: <TestimonialIndex /> },
      { path: 'testimonials/create', element: <CreateTestimonial /> },
      { path: 'testimonials/:id/edit', element: <EditTestimonial /> },
      { path: 'contacts', element: <ContactIndex /> },
      { path: 'portfolio', element: <PortfolioIndex /> },
      { path: 'portfolio/create', element: <CreatePortfolio /> },
      { path: 'portfolio/:id/edit', element: <PortfolioEdit /> },
      { path: 'portfolio-category', element: <PortfolioCatIndex /> },
      { path: 'portfolio-category/create', element: <CreatePortfolioCat /> },
      { path: 'portfolio-category/:id/edit', element: <EditPortfolioCat /> },
    ],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
