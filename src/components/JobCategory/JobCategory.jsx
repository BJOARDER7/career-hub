import React from 'react';
import './JobCategory.css';

const JobCategory = ({category}) => {
  console.log(category)
  const {image_link, title, available_jobs} = category;
  return (
    <div className='job-category'>
      <img src={image_link} alt="" />
      <h2 className='text-xl font-bold'>{title}</h2>
      <p>{available_jobs}+ Jobs Avilable</p>
    </div>
  );
};

export default JobCategory;