import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './components/Header.jsx';
import JobCategory from './components/JobCategory.jsx';
import Home from './components/Home.jsx';
import { getFeaturedJobs as getFeaturedJobs } from './loader/getFeaturedJobs.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=>fetch('categories.json'),
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
