import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import { AppliedJobContext, AvailableJobContext } from '../App';
import HomeBanner from './HomeBanner';
import JobCategories from './JobCategories';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {

    const availableJobsFromLoader = useLoaderData();
    const jobs = useLoaderData();

    const [availableJobs, setAvailableJobs] = useContext(AvailableJobContext);
    const [appliedJobs, setAppliedJobs] = useContext(AppliedJobContext);

    useEffect(() => {
        setAvailableJobs(availableJobsFromLoader);
    }, [availableJobsFromLoader, setAvailableJobs])

    return (
        <div>
            <HomeBanner></HomeBanner>
            <JobCategories></JobCategories>
           <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;