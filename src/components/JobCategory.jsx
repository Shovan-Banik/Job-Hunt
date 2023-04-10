import React from 'react';

const JobCategory = ({jobCategory}) => {
    const{img,title,numberOfPost}=jobCategory;
    return (
        <div className='bg-purple-50 rounded-md p-8 mt-4'>
            <img className='h-16 w-16 text-blue-500' src={img} alt="" />
            <h3 className='text-xl font-bold mt-4'>{title}</h3>
            <p>{numberOfPost}</p>
        </div>
    );
};

export default JobCategory;
