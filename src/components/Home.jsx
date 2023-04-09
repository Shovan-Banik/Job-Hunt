import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategory from './JobCategory';
import pic from '../assets/P3OLGJ1 copy 1.png'

const Home = () => {
    const jobCategories = useLoaderData();

    return (
        <div>
            <div className=' bg-gradient-to-r from-purple-50 to-purple-100 pt-12'>
                <div className='my-container md:flex gap-8'>
                    <div className='md:w-1/2 text-center'>
                        <h1 className='md:text-7xl text-5xl font-bold md:pt-36 '>One Step<br/>Closer To Your <br /><span className='text-purple-500'>Dream Job</span></h1>
                    </div>
                    <div className='md:w-1/2'>
                        <img  src={pic} alt="" />
                    </div>
                </div>
            </div>
            <div className='my-container text-center mt-24'>
                <h2 className='text-5xl font-bold my-5'>Job Category List</h2>
                <p className='text-lg'>Explore thousands of job opportunities with all the information you need. Its your future</p>
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
        </div>
    );
};

export default Home;