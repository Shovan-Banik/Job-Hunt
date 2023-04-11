import React from 'react';
import pic from '../assets/P3OLGJ1 copy 1.png'

const HomeBanner = () => {
    return (
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
    );
};

export default HomeBanner;