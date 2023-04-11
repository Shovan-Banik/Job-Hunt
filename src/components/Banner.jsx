import React from 'react';

const Banner = ({children}) => {
    return (
        <div>
            <div className='text-center bg-gradient-to-r from-purple-50 to-purple-100 to-gray-50 h-[15vh] md:h-[20vh] flex justify-center items-center'>
      <p className='font-bold text-lg'>{children}</p>
    </div>
        </div>
    );
};

export default Banner;