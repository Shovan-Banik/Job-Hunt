import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobs = useLoaderData();
    
    return (
        <div>
            {
                jobs.map(job =>
                <div key={job.id}>
                    <img src={job.img}></img>
                    
                </div>)
            }
        </div>
    );
};

export default Home;