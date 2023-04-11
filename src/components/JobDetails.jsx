// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// // import { JobContext } from '../App';

// const JobDetails = () => {
//     const [jobs,setJobs]=useState({});
//     const {id}=useParams();
    
//     useEffect(()=>{
//         // const jobsData=useContext(JobContext);
//         setJobs(jobsData)
//     },[id])

//     const storeJobData=jobs.filter(job=>job.id===id);
//     console.log(storeJobData);
//     return (
//         <div>
//           <h2>hello from{id}</h2>
//         </div>
//     );
// };

// export default JobDetails;
import React from 'react';

const JobDetails = () => {
    return (
        <div>
            details
        </div>
    );
};

export default JobDetails;