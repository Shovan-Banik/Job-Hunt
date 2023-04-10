// import { json } from "react-router-dom";
// import { getStoredCart } from "../utilities/fakeDB";

export const jobsAndCartData= async ()=>{
    const jobsData= await fetch('jobs.json')
    const jobs= await jobsData.json()
    // let cartArray=[];
    // const savedCart=getStoredCart();
    // for(const id in savedCart){
    //     const foundJobs=jobData.find(job=>job.id===id)
    //     if(foundJobs){
    //         cartArray.push(foundJobs);
    //     }
    // }
    return {jobs}
}
// cartArray,