import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import JobDetails from './components/JobDetails/JobDetails';
import Main from './components/Main/Main';
import Home from './components/Home/Home';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('/public/featuredJobs.json')
      },
      {
        path:'/jobs/:jobId',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`/public/featuredJobs.json`)
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

/**
 * const router = createBrowserRouter([
  
    {
      path:'/',
      element: <Navbar></Navbar>,
      children: [

      {
        path:'/home',
        element: <Home></Home>,
      },
      {
        path:'/home',
        element: <FeaturedJobs></FeaturedJobs>,
        loader: () => fetch('/public/featuredJobs.json')
      },
      {
        path:'/home:jobId',
        element: <JobDetails></JobDetails>
      }
    ]
  },
  
])
 */