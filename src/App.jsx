import React, { createContext } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';

export const JobContext=createContext([]);
//export const CartContext=createContext([]);

const App = () => {
  const {jobs}=useLoaderData()
  // console.log(jobs);
  return (
    <JobContext.Provider value={jobs}>
      <Header></Header>
      <Outlet></Outlet>
    </JobContext.Provider>
      
    
  );
};

export default App;