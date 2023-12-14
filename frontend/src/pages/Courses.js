import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Courses.css'

const YouTubeCourses = () => {
  const [courses, setCourses] = useState([]);
  const [searchCourse, setSearchCourse] = useState('freelancing course');
//   const[filteredItems,setFilteredItems]=useState('freelancing courses');
//     // useEffect(() => {
//     //     setFilteredItems(data);
//     //   }, [])
//     const handleFilter=(event)=>{
//         // if(!(event.key=='Enter')){
//         //     return
//         // }
//         const searchWord=event.target.value;
        
//         const newFilter=courses.filter((value)=>{
//             if(searchWord==''){
//             return value;
//         }
//         return ((value.title.toLowerCase().includes(searchWord.toLowerCase())=='')?value.keywords.toLowerCase().includes(searchWord.toLowerCase()):value.title.toLowerCase().includes(searchWord.toLowerCase()))
//     })
    
//     setFilteredItems(newFilter)

// };
// useEffect(() => {
//     setFilteredItems(data);
//   }, [data])

  useEffect(() => {
    const apiKey = 'AIzaSyCrAj504Gyiu9QtdNSQrdXIWjMSUKr9k_c';

    const searchQuery = searchCourse;
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&key=${apiKey}`;
    axios.get(apiUrl)
      .then(response => {
        setCourses(response.data.items);
        console.log(courses)
      })
      .catch(error => {
        console.error('Error fetching YouTube courses:', error);
      });
  }, [searchCourse]);

  return (
    <div>
      <div className="input-container">
  <input id='search' type="text" name="text" className="input-field" placeholder="search..." ></input>
  <span className="icon" onClick={(e)=>setSearchCourse(e)}> 
    <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  </span>
</div>
<div style={{display:'flex',flexWrap:'wrap', justifyContent:'space-between'}}>
      {/* <ul> */}
        {courses.map(course => (
            
          <div key={course.id.videoId} style={{margin:'20px',display:'grid'}}>
             <a
              href={`https://www.youtube.com/watch?v=${course.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
<div class="card">
  {/* <div class="img"> */}
        <img src={course.snippet.thumbnails.high.url} className='img'></img>
    {/* <div class="save"> */}

    {/* </div> */}
  {/* </div> */}

  <div class="text">
    <p class="h3"> {course.snippet.title} </p>
    {/* <p class="p"> 6 Video - 40 min </p>

    <div class="icon-box">

      <p class="span">Business Trip
    </p></div> */}
  </div>
</div>
</a>


           
          </div>
        ))}
      {/* </ul> */}
    </div>
    </div>
  );
};

export default YouTubeCourses;
