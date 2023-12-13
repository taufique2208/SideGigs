import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    // Replace 'YOUR_API_KEY' with the actual API Key you obtained from the Google Cloud Console
    const apiKey = 'AIzaSyDcuI21f8HtmAWlAFASLgxv7UCF1ndnyKY';

    const searchQuery = searchCourse;

    // Use the 'q' parameter to search for web development courses
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&key=${apiKey}`;
    axios.get(apiUrl)
      .then(response => {
        setCourses(response.data.items);
      })
      .catch(error => {
        console.error('Error fetching YouTube courses:', error);
      });
  }, [searchCourse]);

  return (
    <div>
      <div className="input-container">
  <input id='search' type="text" name="text" className="input-field" placeholder="search..." onChange={(value)=>{setSearchCourse(value)}}></input>
  <span className="icon"> 
    <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  </span>
</div>
      <ul>
        {courses.map(course => (
          <li key={course.id.videoId}>
            <a
              href={`https://www.youtube.com/watch?v=${course.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {course.snippet.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubeCourses;
