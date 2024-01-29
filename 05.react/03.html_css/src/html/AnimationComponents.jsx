import React from 'react';
import '../css/AnimationComponents.css';

function AnimationComponents() {
  return (
    <div className="animation-components">
      {/* Simple CSS Transition */}
      <div className="transition-box">Hover over me!</div>

      {/* CSS Animation */}
      <div className="animation-box">I'm animated!</div>
    </div>
  );
}

export default AnimationComponents;
