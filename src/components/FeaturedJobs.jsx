import React, { useContext, useState } from 'react';
import { AvailableJobContext } from '../App';
import FeaturedJob from './FeaturedJob';

const FeaturedJobs = () => {
    const [availableJobs,setAvailableJobs]=useContext(AvailableJobContext);
    const [showMore,setShowMore]=useState(false);
    const showedJobs=showMore ? availableJobs.slice() : availableJobs.slice(0,4);
    return (
        <div>
             <div className='my-container text-center mt-12'>
                <h1 className='text-5xl font-bold md:pt-16'>Featured Jobs</h1>
                <p className='text-xl text-gray-500 my-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='my-container md:grid md:grid-cols-2 gap-12 mb-12'>
                {
                    showedJobs.map((showedJob=><FeaturedJob
                    key={showedJob.id}
                    showedJob={showedJob}
                    ></FeaturedJob>))
                }
            </div>
            <div className='flex justify-center'>
                {
                    showMore ? (<button className='btn2' onClick={() => setShowMore(!showMore)}>Show Less</button>) : (<button className='btn2' onClick={() => setShowMore(!showMore)}>Show More</button>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;