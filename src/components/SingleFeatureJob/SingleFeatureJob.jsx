import React from 'react';
import './SingleFeatureJob.css';
import locationIcon from '../../images/location-icon.png';
import dollarIcon from '../../images/dollar-icon.jpg';
import { Link } from 'react-router-dom';


const SingleFeatureJob = ({job}) => {
  const {company_logo, job_title, company_name, remote_or_onsite, location, salary, id} = job;
  
  return (
    <div className='job overflow-hidden'>
        <img className='object-cover w-100% h-24' src={company_logo} alt="" />
        <h2 className='text-xl font-bold'>{job_title}</h2>
        <h3>{company_name}</h3>
        <div className='flex my-3'>
            <button className='job-time'>{remote_or_onsite}</button>
            <button className='job-time'>Full Time</button>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <img className='w-100% h-6' src={locationIcon} alt="" />
            <h3>{location}</h3>
          </div>
          <div className='flex items-center'>
            <img className='w-100% h-6' src={dollarIcon} alt="" />
            <h3> Salary : {salary}</h3>
          </div>
            
        </div>
        <button className='bg-purple-800 text-white p-2 my-2 rounded'><Link to={`/jobs/${id}`}>View Details</Link></button>
        
    </div>
  );
};

export default SingleFeatureJob;