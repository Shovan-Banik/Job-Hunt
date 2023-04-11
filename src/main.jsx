import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
import { jobDetailsLoader, jobsLoader } from './loader/getCart&JobData';
import JobDetails from './components/JobDetails';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: jobsLoader
      },
      {
        path:'/detail/:id',
        element:<JobDetails></JobDetails>,
        loader:({params})=>jobDetailsLoader(params.id)
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path:'applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
