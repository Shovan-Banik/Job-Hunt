import React, { useEffect, useState } from 'react';
import JobCategory from './JobCategory';

const JobCategories = () => {
    const [categories, setCategories] = useState([]);
    const categoriesLoader=async()=>{
        const res=await fetch('categories.json');
        const category=await res.json();
        return category;
    }
    useEffect(()=>{
        const loadCategories=async()=>{
            const categoryData=await categoriesLoader();
            setCategories(categoryData);
        };
        loadCategories();
    },[])
    return (
        <div>
           <div className='my-container text-center mt-24'>
                <h2 className='text-5xl font-bold my-5'>Job Category List</h2>
                <p className='text-xl text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='my-container md:grid grid-cols-4 gap-4 mt-12'>
                {
                    categories.map((category,index) =>
                        <JobCategory
                            key={index}
                            category={category}
                        ></JobCategory>
                    )
                }
            </div>
        </div>
    );
};

export default JobCategories;