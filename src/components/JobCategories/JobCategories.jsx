import React, { useEffect, useState } from 'react';
import './JobCategories.css';
import JobCategory from '../JobCategory/JobCategory';

const JobCategories = () => {
  
  const [categories, setCategories] = useState([]);

  useEffect( () => {
    fetch('jobCategory.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])

  return (
    <div className='text-center'>
      <h2 className='text-2xl font-bold mb-3'>Job Category List</h2>
      <p>Choose the right category for your job. Accurately categorising positions helps candidates search for the most relevant jobs.</p>
      <div className='md:grid md:grid-cols-4 justify-center items-center'>
        {
          categories.map(category => <JobCategory
          key={category.jobId}
          category={category}
          ></JobCategory>)
        }
      </div>
    </div>
  );
};

export default JobCategories;