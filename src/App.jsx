import React, { createContext, useState } from 'react';
import Header from './components/Header';
import { Outlet} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

export const AppliedJobContext = createContext([]);
export const AvailableJobContext = createContext([]);

const App = () => {
  const [availableJobs, setAvailableJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  return (
    <>
    <AvailableJobContext.Provider value={[availableJobs, setAvailableJobs]}>
      <AppliedJobContext.Provider value={[appliedJobs, setAppliedJobs]}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </AppliedJobContext.Provider>
    </AvailableJobContext.Provider>
    <Toaster/>
    </>
  );
};

export default App;