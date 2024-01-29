import React from 'react';
import '../css/MediaElements.css';

function MediaElements() {
  return (
    <div className="media-elements">
      {/* Image */}
      <img src="path_to_image" alt="Description" className="responsive-image" />

      {/* Audio */}
      <audio controls>
        <source src="path_to_audio" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Video */}
      <video width="320" height="240" controls>
        <source src="path_to_video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default MediaElements;
