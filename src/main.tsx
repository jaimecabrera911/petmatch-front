import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import UserPage from './pages/UserPage'
import Login from './components/Login/Login'
import SingUpStep1 from './components/SingUp/SingUpStep1'
import SingUpStep2 from './components/SingUp/SingUpStep2'
import "./index.css"
import SurveyPage from './pages/SurveyPage'
import AdoptionPage from './pages/AdoptionPage'
import ManagePage from './pages/ManagePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/users",
    element: <UserPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/users/login" />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "singup-1",
        element: <SingUpStep1 />,
      },
      {
        path: "singup-2",
        element: <SingUpStep2 />,
      },
    ]
  },
  {
    path: "/adoption",
    element: <AdoptionPage />
  },
  {
    path: "/surveys",
    element: <SurveyPage />,
  },
  {
    path: "/manage",
    element: <ManagePage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
