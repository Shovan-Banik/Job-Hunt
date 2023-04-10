import React from 'react';

const Job = ({job}) => {
    const {img,title,company,jobType,location,salary,id}=job;
    return (
        <div className='bg-purple-50 p-4 border-1 border-gray-100 rounded-md'>
            <img className='h-12 w-24' src={img} alt="" />
            <h4>{title}</h4>
            <p>{company}</p>
            <p>{jobType}</p>
            <div className='flex'>
            <p>{location}</p>
            <p>{salary}</p>
            </div>
        </div>
    );
};

export default Job;