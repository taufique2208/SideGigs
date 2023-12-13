import React, { useState, useEffect } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const apiUrl = '/api/courses/v1/courses';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs once after the initial render

  return (
    <div>
      <h1>List of Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
