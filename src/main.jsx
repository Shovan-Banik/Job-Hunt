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
import { jobsAndCartData } from './loader/getCart&JobData';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    loader:jobsAndCartData,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=>fetch('categories.json'),
        // loader:()=>fetch('jobs.json')
        
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
