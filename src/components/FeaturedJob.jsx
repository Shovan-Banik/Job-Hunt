import React from 'react';
import {
    MapPinIcon,
    CurrencyDollarIcon
} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const FeaturedJob = ({ showedJob }) => {
    const { img, title, company, full_or_part_time, location, remote_or_onsite, salary, id } = showedJob;
    return (
        <div className='bg-purple-50 py-4 border-1 border-gray-100 rounded-md pl-12'>
            <img className='h-12 w-24 my-2' src={img} alt="" />
            <h4 className='text-xl font-bold my-2'>{title}</h4>
            <p className='text-gray-400'>{company}</p>
            <div className='flex gap-2 py-2'>
                <button className='border border-indigo-300 text-indigo-600 px-3 font-medium text-sm py-1 rounded-lg bg-none disabled'>{remote_or_onsite}</button>
                <button className='border border-indigo-300 text-indigo-600 px-3 font-medium text-sm py-1 rounded-lg bg-none disabled'>{full_or_part_time}</button>
            </div>
            <div className='flex items-center my-2'>
                <MapPinIcon className='w-4 h-4'></MapPinIcon><p className='mr-8 text-gray-400'>{location}</p>
                <CurrencyDollarIcon className='w-4 h-4'></CurrencyDollarIcon><p className='text-gray-400'>{salary}</p>
            </div>
            <Link to={`/detail/${id}`}><button className='btn2 my-2'>View Details</button></Link>
        </div>
    );
};

export default FeaturedJob;