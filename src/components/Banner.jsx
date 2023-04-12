import React from 'react';
import pic from '../assets/Vector.png'
import pic2 from '../assets/Vector-1.png'

const Banner = ({ children }) => {
    return (
        <div>
            <div className='text-center bg-gradient-to-r from-purple-50 to-purple-100 to-gray-50 h-[30vh] md:h-[40vh] flex justify-center items-center'>
                <p className='font-bold text-lg'>{children}</p>
            </div>
            <img className='h-36 w-36 mt-[-145px]' src={pic} alt="" />
            <img className='absolute w-36 h-36 end-0 top-0' src={pic2} alt="" />
        </div>
    );
};

export default Banner;