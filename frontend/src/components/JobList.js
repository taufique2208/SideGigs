import React from "react";
import "./JobList.css";
import {useState} from 'react'

const JobList = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseDetail = () => {
    setSelectedJob(null);
  };



  return (
    <div className="job-list">
      <h2 className="job-title">Job List</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id} className="job-item" onClick={() => handleJobClick(job)}>
            <h3 className="job-name">{job.title}</h3>
            <p className="job-description">{job.description}</p>
            <p className="required-skills">{job.skills}</p>
            <p className="cost-range">{job.costrange}</p>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
