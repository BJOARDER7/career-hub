import './JobDetails.css';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    
  const {jobId} = useParams();
  const jobs = useLoaderData();
   
  const [job, setJob] = useState({});

  useEffect(() => {
    const jobData = jobs.find(job => job.id == jobId);
    setJob(jobData);
  }, [job,jobId])
  
  return (
    <div className='mt-10'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Job Details</h2>
      <div className=' md:flex mt-10'>

    <div className='single-job pr-8'>
      <p><span className='font-bold'>Job Description:</span> {job.job_description}</p>
      <p><span className='font-bold'>Job Responsibility:</span> {job.job_responsibility}</p>
      <p><span className='font-bold'>Educational Requirements:</span><br />{job.educational_requirements}</p>
      <p><span className='font-bold'>Experiences:</span><br />{job.experiences}</p>
      </div>
      <div>
        <h4 className='text-xl font-bold mb-4'>Job Details</h4>
        <hr />
        <p><span className='font-bold'>Salary:</span> {job.salary}</p>
        <p><span className='font-bold'>Job Title:</span> {job.job_title}</p>
        <h4 className='text-xl font-bold mt-4'>Contact Information</h4>
        <hr />
        <p><span className='font-bold'>Phone:</span> {job.phone}</p>
        <p><span className='font-bold'>Email:</span> {job.email}</p>
        <p><span className='font-bold'>Address:</span> {job.location}</p>
        <button className='bg-purple-800 text-white p-2 my-4 rounded w-full'>Apply Now</button>
      </div>
      
      </div>
      
    </div>
  );
};

export default JobDetails;