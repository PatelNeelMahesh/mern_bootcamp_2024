import React from 'react';
import '../css/LayoutComponents.css';

function LayoutComponents() {
  return (
    <div className="layout-components">
      {/* Flexbox layout */}
      <div className="flexbox-container">
        <div className="flex-item">Flex Item 1</div>
        <div className="flex-item">Flex Item 2</div>
        <div className="flex-item">Flex Item 3</div>
      </div>

      {/* CSS Grid layout */}
      <div className="grid-container">
        <div className="grid-item">Grid Item 1</div>
        <div className="grid-item">Grid Item 2</div>
        <div className="grid-item">Grid Item 3</div>
      </div>
    </div>
  );
}

export default LayoutComponents;
