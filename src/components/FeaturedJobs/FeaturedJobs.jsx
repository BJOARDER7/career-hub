import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFeatureJob from '../SingleFeatureJob/SingleFeatureJob';

const FeaturedJobs = () => {
  const jobsData = useLoaderData();
  const [jobs, setJobs] = useState(jobsData);
  const [showAllJob, setShowAllJob] = useState(false);
  
  return (
    <div>
      <div className='text-center'>
          <h2 className='text-2xl font-bold mt-6 mb-2'>Featured Jobs</h2>
          <p>Massive list of job titles grouped by fields like Software Engineer, Web Development, Web Design and more.</p>
      </div>
      <div className='md:grid md:grid-cols-2 justify-center items-center'>
        {
          showAllJob ? jobs.map((job) => <SingleFeatureJob key={job.id} job={job} />)
          : jobs
              .slice(0, 4)
              .map((job) => <SingleFeatureJob key={job.id} job={job} />) 
          }
      </div>
      <div className="text-center">
          {!showAllJob && (
            <button
              onClick={() => setShowAllJob(true)}
              className='bg-purple-800 text-white p-2 rounded w-1/6 py-2'
            >
              See All Jobs
            </button>
          )}
        </div>

    </div>
  );
};

export default FeaturedJobs;
