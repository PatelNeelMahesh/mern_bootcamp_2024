import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditCourse() {
  const [courseName, setCourseName] = useState("frontend")
  const [courseData, setCourseData] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    // Fetch the current course details to pre-fill the form
    axios.get(`http://localhost:8000/courses/${courseName}`)
      .then((response) => {
        setCourseData(response.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.error(`Error fetching details for ${courseName}:`, error);
      });
  }, [courseName]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Send a PUT request to update the course information
    axios.put(`http://localhost:8000/courses/${courseName}`, courseData)
      .then(() => {
        console.log('Course information updated successfully.');
        // Redirect or update the UI as needed
      })
      .catch((error) => {
        console.error('Error updating course information:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Course</h1>
      <form onSubmit={handleEditSubmit}>
        <div>
          <label>Course Name:</label>
          <input
            type="text"
            name="course"
            value={courseData.course}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add input fields for other course details */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditCourse;
