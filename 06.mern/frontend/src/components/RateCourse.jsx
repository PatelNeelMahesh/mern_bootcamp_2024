import React, { useState } from 'react';
import axios from 'axios';

function RateCourse() {
  const [rating, setRating] = useState('');

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmitRating = (e) => {
    e.preventDefault();
    // Send a POST request to add the rating to the course
    axios.post(`http://localhost:8000/courses/frontend/rating`, { rating })
      .then(() => {
        console.log('Rating added successfully.');
        // Redirect or update the UI as needed
      })
      .catch((error) => {
        console.error('Error adding rating:', error);
      });
  };

  return (
    <div>
      <h1>Rate Course</h1>
      <form onSubmit={handleSubmitRating}>
        <div>
          <label>Rating:</label>
          <input type="number" name="rating" onChange={handleRatingChange} required />
        </div>
        <button type="submit">Add Rating</button>
      </form>
    </div>
  );
}

export default RateCourse;
