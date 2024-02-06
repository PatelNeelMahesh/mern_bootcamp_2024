import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CourseDetails() {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch details of the specific course from the backend
    axios.get('http://localhost:8000/courses/frontend')
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching details for frontend:`, error);
      });
  }, []);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Course Details</h1>
      <p>Course Name: {course.course}</p>
      <p>Cohort: {course.cohort}</p>
      <p>College: {course.college}</p>
      <p>Semester: {course.semester}</p>
      <p>Rating: {course.averageRating}</p>
    </div>
  );
}

export default CourseDetails;
