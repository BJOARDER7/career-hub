import React, { useEffect, useState } from 'react';
import SingleFeatureJob from '../SingleFeatureJob/SingleFeatureJob';


const ApplyJob = () => {
  const [jobs, setJobs] = useState([]);
  const [filterJob, setFilterJob] = useState([]);

  useEffect(() => {
    const storedJobData = JSON.parse(localStorage.getItem("jobs"));
    if (storedJobData) {
      setJobs(storedJobData);
      setFilterJob(storedJobData);
    }
  }, []);

  const handleFilter = (event) => {
    const value = event.target.value;
    const filterJobData = jobs.filter((job) => job.remote_or_onsite == value );
    setFilterJob(filterJobData)
  }

  return (
    <div>

      <div className="my-3">
        <label htmlFor="" className='font-bold text-xl mt-12 text-blue-500'>Filter Job By: </label>
        <select onChange={handleFilter} className="select border-2 w-1/6 ml-2">
          <option disabled value="selected">
            Choose Here
          </option>
          <option value="Remote">Remote Jobs</option>
          <option value="Onsite">Onsite Jobs</option>
        </select>
      </div>

      {filterJob.length > 0 ? (
        filterJob?.map((job) => (
          <div className="my-4">
            <SingleFeatureJob key={job.id} job={job}></SingleFeatureJob>
          </div>
        ))
      ) : (
        <h1 className="text-xl text-center text-red-600">No Job Found</h1>
      )}
    </div>
  );
};

export default ApplyJob;