import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { BASE_URL } from '../utils/config';
function Applicants() {
    const {jobId} = useParams();
    console.log(jobId)
    const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(user._id);
        const res = await fetch(`${BASE_URL}/getjob/job/${jobId}`);
        const result = await res.json();

        if (result.success) {
          console.log('API Response:', result);
          setFilter(result.data);
        } else {
          console.error('API response is not as expected:', result);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [jobId]); // Add user._id as a dependency

  useEffect(() => {
    console.log(filter); // Log the updated state
  }, [filter]);
  return (
    <>
    <div>
    {
  filter.map((applicant) => (
    <div className='large-input' key={applicant._id} style={{height:'100px',width:'95%'}}>
      <div>Email : {applicant.userEmail}</div>
      <div>Rs : {applicant.bid}</div>
      <div>Proposal : {applicant.proposal}</div>
    </div>
  ))
}
    </div>
    </>
  )
}

export default Applicants