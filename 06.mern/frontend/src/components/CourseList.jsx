import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch the list of courses from the backend
    axios.get('http://localhost:8000/courses')
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div>
      <h1>Course List</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.courseId}>
            <Link to={`/courses/${course.course}`}>{course.course}</Link>
            {' '}
            | <Link to={`/courses/edit/${course.course}`}>Edit</Link>
            {' '}
            | <Link to={`/courses/delete/${course.course}`}>Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
