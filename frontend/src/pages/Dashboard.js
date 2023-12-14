import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { BASE_URL } from '../utils/config';
import { NavLink } from 'react-router-dom';

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(user._id);
        const res = await fetch(`${BASE_URL}/getjob/${user._id}`);
        const result = await res.json();

        if (result.success) {
          console.log('API Response:', result.data);
          setFilter(result.data);
        } else {
          console.error('API response is not as expected:', result);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [user._id]); // Add user._id as a dependency

  useEffect(() => {
    console.log(filter); // Log the updated state
  }, [filter]);

  return (
    <>
      <div style={{alignItems:'center'}}>
        <h1>My Posted Projects</h1>
        {filter.map((project) => (
            <>
          <NavLink to={`/dashboard/${project._id}`}>
            <div key={project._id} class='small-input' style={{width:'90%',alignItems:'center'}}>{project.jobTitle}<span style={{textAlign:'right',float:'right'}}>{project.applicants.length} freelancers interested</span></div>
            </NavLink>
          </>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
