import React from 'react';
import '../css/ListElements.css';

function ListElements() {
  return (
    <div className="list-elements">
      {/* Unordered list */}
      <ul>
        <li>Unordered Item 1</li>
        <li>Unordered Item 2</li>
        <li>Unordered Item 3</li>
      </ul>

      {/* Ordered list */}
      <ol>
        <li>Ordered Item 1</li>
        <li>Ordered Item 2</li>
        <li>Ordered Item 3</li>
      </ol>

      {/* Description list */}
      <dl>
        <dt>Description Term 1</dt>
        <dd>Description Details 1</dd>
        <dt>Description Term 2</dt>
        <dd>Description Details 2</dd>
      </dl>
    </div>
  );
}

export default ListElements;
