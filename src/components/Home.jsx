import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategory from './JobCategory';
import pic from '../assets/P3OLGJ1 copy 1.png'
import { JobContext } from '../App';
import Job from './Job';

const Home = () => {
    const jobCategories = useLoaderData();
    const jobs=useContext(JobContext)
    console.log(jobs);

    return (
        <div>
            <div className=' bg-gradient-to-r from-purple-50 to-purple-100 pt-12'>
                <div className='my-container gap-8 flex xs:flex-col flex-col-reverse md:flex-row'>
                    <div className='md:w-1/2 text-center'>
                        <h1 className='md:text-7xl text-5xl font-bold md:pt-16'>One Step<br/>Closer To Your <br /><span className='text-indigo-500'>Dream Job</span></h1>
                        <p className='text-xl text-gray-500 my-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='btn2'>Get Started</button>
                    </div>
                    <div className='md:w-1/2'>
                        <img  src={pic} alt="" />
                    </div>
                </div>
            </div>
            <div className='my-container text-center mt-24'>
                <h2 className='text-5xl font-bold my-5'>Job Category List</h2>
                <p className='text-xl text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='my-container md:grid grid-cols-4 gap-4 mt-12'>
                {
                    jobCategories.map(jobCategory =>
                        <JobCategory
                            key={jobCategory.id}
                            jobCategory={jobCategory}
                        ></JobCategory>
                    )
                }
            </div>
            <div className='my-container text-center mt-12'>
                <h1 className='md:text-7xl text-5xl font-bold md:pt-16'>Featured Jobs</h1>
                <p className='text-xl text-gray-500 my-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='md:grid md:grid-cols-2 my-container gap-12'>
                {
                    jobs.map(job=><Job
                    key={job.id}
                    job={job}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default Home;