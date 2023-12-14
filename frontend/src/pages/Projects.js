import React from 'react'
import { useState,useContext ,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
// import { Container,Row,Col,Form,FormGroup,Button } from 'reactstrap'
// import './Login.css'
// import loginImg from'../assets/images/login.png'
// import userIcon from'../assets/images/user.png'
import { AuthContext } from '../context/authContext'
// import { AuthContextProvider } from '../context/authContext';
import { BASE_URL } from '../utils/config'
import './Project.css'
import { Card } from 'reactstrap'
import CardBox from '../components/CardBox'

function Projects() {
    const [filter,setFilter]=useState([]);

    // async function handleFilter() {
    //     try {
    //       const res = await fetch(`${BASE_URL}/projects`);
      
          
      
    //       const result = await res.json();
    //     //   const resultData = res.data;
    //     console.log(filter);
    //       setFilter(result)
    //       console.log(result)
    //       // Do something with the result, e.g., return it or navigate to another page
      
    //     //   return result;
    //     } catch (error) {
    //       console.error(error);
    //       // Handle the error, e.g., show an alert or navigate to an error page
    //     //   return null; // Or another suitable value indicating failure
    //     }
    //   }
    useEffect(() => {
        // This block of code will run when the component mounts
        const fetchData = async () => {
          try {
            const res = await fetch(`${BASE_URL}/projects`);
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
    
        fetchData(); // Invoke the function to fetch data when the component mounts
      }, []);
    async function handleFilter() {
        try {
          const res = await fetch(`${BASE_URL}/projects`);
          const result = await res.json();
      
          
          if (result.success && Array.isArray(result.data)) {
              console.log('API Respons66e:', result.data); // Log the entire response for debugging
            setFilter(result.data);
          } else {
            console.error('API response is not as expected:', result);
            // Handle the case where the response is not as expected
          }

        } catch (error) {
          console.error(error);
          // Handle the error, e.g., show an alert or navigate to an error page
        }}
      

  return (
    <>
    <div className='search-wrapper'>
    <div className="input-container" onChange={handleFilter}>
  <span><input type="text" name="text" className="input-field" placeholder="search..."></input>
  <button className="block font-medium text-center text-white " onClick={handleFilter}>
                                    <button class="comic-button " style={{float:'right'}}>Search</button>
                                    </button>
  
                                    </span>
  <span > 
    {/* <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
  </span>
</div>
<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
          {filter.map(project => (
            <span key={project._id} style={{margin:'7px'}}><CardBox id={project._id} hostId={project.hostId} title={project.jobTitle} minprice={project.lowestRange} maxprice={project.highestRange} description={project.description}></CardBox></span>
          ))}
        </div>
    </div>
    </>
  )
}

export default Projects