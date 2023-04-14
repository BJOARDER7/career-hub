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
import Notfound from './components/NotFound/Notfound';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ApplyJob from './components/ApplyJob/ApplyJob';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('/featuredJobs.json')
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/jobs',
        element: <ApplyJob></ApplyJob>
      },
      {
        path:'/jobs/:jobId',
        element: <JobDetails></JobDetails>,
        loader: async ({params}) => {
          const res = await fetch("/featuredJobs.json");
          const jobs = await res.json();

          const findjob = jobs.find(job => job.id == params.jobId);
          return findjob;

        }
      },
      {
        path: "*",
        element: <Notfound></Notfound>
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

