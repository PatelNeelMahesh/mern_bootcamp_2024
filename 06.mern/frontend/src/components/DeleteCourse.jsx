import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DeleteCourse() {
  const [courseName, setCourseName] = useState("dsa")
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    // Send a DELETE request to remove the course
    setIsDeleting(true);
    axios.delete(`http://localhost:8000/courses/${courseName}`)
      .then(() => {
        console.log('Course deleted successfully.');
        navigate('/courses'); // Redirect to the course list page
      })
      .catch((error) => {
        console.error('Error deleting course:', error);
        setIsDeleting(false);
      });
  };

  return (
    <div>
      <h1>Delete Course</h1>
      <p>Are you sure you want to delete {courseName} course?</p>
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete Course'}
      </button>
    </div>
  );
}

export default DeleteCourse;
