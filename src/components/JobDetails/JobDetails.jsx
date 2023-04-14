import './JobDetails.css';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    
  const job = useLoaderData();
  const {job_description, job_responsibility,educational_requirements, experiences, salary, job_title, phone, email, location} = job;
   
  const handleJob = () => {
    const storedJobData = JSON.parse(localStorage.getItem("jobs"));
    if(storedJobData){
        localStorage.setItem("jobs",JSON.stringify([...storedJobData,job]))
    } else{
        localStorage.setItem("jobs",JSON.stringify([job]))
    }
  }

    
  return (
    <div className='mt-10'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Job Details</h2>
      <div className=' md:flex mt-10'>

    <div className='single-job pr-4'>
      <p><span className='font-bold'>Job Description:</span> {job_description}</p>
      <p><span className='font-bold'>Job Responsibility:</span> {job_responsibility}</p>
      <p><span className='font-bold'>Educational Requirements:</span><br />{educational_requirements}</p>
      <p><span className='font-bold'>Experiences:</span><br />{experiences}</p>
      </div>
      <div>
        <h4 className='text-xl font-bold mb-4'>Job Details</h4>
        <hr />
        <p><span className='font-bold'>Salary:</span> {salary}</p>
        <p><span className='font-bold'>Job Title:</span> {job_title}</p>
        <h4 className='text-xl font-bold mt-4'>Contact Information</h4>
        <hr />
        <p><span className='font-bold'>Phone:</span> {phone}</p>
        <p><span className='font-bold'>Email:</span> {email}</p>
        <p><span className='font-bold'>Address:</span> {location}</p>
        <button onClick={handleJob} className='bg-purple-800 text-white p-2 my-4 rounded w-full'>Apply Now</button>
      </div>
      
      </div>
      
    </div>
  );
};

export default JobDetails;

