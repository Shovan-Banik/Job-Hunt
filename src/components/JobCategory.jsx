import React from 'react';

const JobCategory = ({jobCategory}) => {
    const{img,title,numberOfPost}=jobCategory;
    return (
        <div className='bg-gradient-to-r from-purple-50 to-pink-50 rounded-md p-8'>
            <img className='h-16 w-16 text-blue-500' src={img} alt="" />
            <h3 className='text-xl font-bold'>{title}</h3>
            <p><small>{numberOfPost}</small></p>
        </div>
    );
};

export default JobCategory;
