import React, { useState } from 'react';
import axios from 'axios';

function AddCourse() {
  // Initialize state for course data
  const [courseData, setCourseData] = useState({
    course: '',
    cohort: '',
    college: '',
    semester: '',
  });

  // Handle changes in input fields and update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send a POST request to add a new course using Axios
    axios.post('http://localhost:8000/courses', courseData)
      .then((response) => {
        // Successful response handling
        console.log('Course added successfully.');
        // You can redirect to another page or update the UI as needed here
      })
      .catch((error) => {
        // Error handling
        console.error('Error adding course:', error);
      });
  };

  return (
    <div>
      <h1>Add Course</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Name:</label>
          <input
            type="text"
            name="course"
            value={courseData.course}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Cohort:</label>
          <input
            type="text"
            name="cohort"
            value={courseData.cohort}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>College:</label>
          <input
            type="text"
            name="college"
            value={courseData.college}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Semester:</label>
          <input
            type="text"
            name="semester"
            value={courseData.semester}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;
