import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const AppliedJob = ({shownJob}) => {
    const { img, title, company, full_or_part_time, location, remote_or_onsite, salary, id } = shownJob;
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 gap-y-4 md:gap-y-0 md:gap-4 border drop-shadow-sm p-3 md:p-5'>
      <div className='col-span-1 min-h-[10vh] flex justify-center items-center bg-gray-200 rounded-md'>
        <img className='w-1/2' src={img} alt="" />
      </div>
      <div className='col-span-3 flex flex-col'>
        <p className='font-semibold text-xl'>{title}</p>
        <p className='text-gray-500 my-1'>{company}</p>
        <div className='flex gap-2 py-2 my-1'>
          <button className='job-type-btn'>{remote_or_onsite}</button>
          <button className='job-type-btn'>{full_or_part_time}</button>
        </div>
        <div className='flex gap-3 mt-1'>
          <div className='flex items-center'>
            <MapPinIcon className="h-5 w-5 text-gray-500" />
            <p className='text-sm text-gray-500'>{location}</p>
          </div>
          <div className='flex items-center'>
            <CurrencyDollarIcon className="h-5 w-5 text-gray-500 mr-1" />
            <p className='text-sm text-gray-500'>Salary: {salary}</p>
          </div>
        </div>
      </div>
      <div className='col-span-1 flex justify-center items-center'>
        <div>
          <Link to={`/detail/${id}`}>
            <button className='btn2'>View Details</button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default AppliedJob;