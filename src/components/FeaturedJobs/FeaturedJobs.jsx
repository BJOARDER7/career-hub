import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFeatureJob from '../SingleFeatureJob/SingleFeatureJob';

const FeaturedJobs = () => {
  const jobs = useLoaderData();
  
  return (
    <div>
      <div className='text-center'>
          <h2 className='text-2xl font-bold mt-6 mb-2'>Featured Jobs</h2>
          <p>Massive list of job titles grouped by fields like Software Engineer, Web Development, Web Design and more.</p>
      </div>
      <div className='md:grid md:grid-cols-2 justify-center items-center'>
        {
          jobs.map(job => <SingleFeatureJob
          key={job.id}
          job={job}
          ></SingleFeatureJob>)
        }
      </div>

    </div>
  );
};

export default FeaturedJobs;