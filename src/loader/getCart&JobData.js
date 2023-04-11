export const jobsLoader= async ()=>{
    const jobsData= await fetch('/jobs.json')
    const jobs= await jobsData.json()
    return jobs;
}

export const jobDetailsLoader = async (id) => {
    const jobs = await jobsLoader();
    const job = jobs.find(d => d.id === id);
    return job;
  };
