import React from "react";
import "./JobCategoriesList.css"; // Import your CSS file

const JobCategoriesList = () => {
  return (
    
    <div className="sidebar-sticky">
      <h1>Job Categories</h1>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  
                  Dashboard <span className="sr-only">(current)</span>
                </a>
                <hr/>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  
                  Orders
                </a>
                <hr/>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  
                  Products
                </a>
                <hr/>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 
                  Customers
                </a>
                <hr/>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 
                  Reports
                </a>
                <hr/>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  
                  Integrations
                </a>
              </li>
            </ul>
            <div className="grid-container">
            <img src={require('../assets/job-search-vector-design.jpg')}/>
            </div>
            
            
          </div>
  );
};

export default JobCategoriesList;
