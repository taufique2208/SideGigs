import React, { useState } from "react";
import JobCategoriesList from "../components/JobCategories";
import JobList from "../components/JobList";
import "./Jobs.css"; // Import your CSS file

const JobPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  

  const jobs = [
    { id: 1, title: "Job 1", description: "Description for Job 1", skills: "canva, photoshop", costrange: "300-500"},
    { id: 2, title: "Job 2", description: "Description for Job 2", skills: "canva, photoshop", costrange: "300-500" },
    { id: 3, title: "Job 3", description: "Description for Job 3", skills: "canva, photoshop", costrange: "300-500" },
    { id: 4, title: "Job 3", description: "Description for Job 3", skills: "canva, photoshop", costrange: "300-500" },
  ];

  const filteredJobs = selectedCategoryId
    ? jobs.filter(job => job.categoryId === selectedCategoryId)
    : jobs;

  return (
    <div className="job-page">
      <div className="categories-list">
        <JobCategoriesList/>
      </div>
      <div className="jobs-list">
        <JobList jobs={filteredJobs} />
      </div>
    </div>
  );
};

export default JobPage;
