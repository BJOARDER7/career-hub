import React from 'react';
import './JobCategory.css';

const JobCategory = ({category}) => {
  const {image_link, title, available_jobs} = category;
  
  return (
    <div className='job-category'>
        <img src={image_link} alt="" />
        <div>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p>{available_jobs}+ Jobs Available</p>
        </div>  
    
    </div>
  );
};

export default JobCategory;

