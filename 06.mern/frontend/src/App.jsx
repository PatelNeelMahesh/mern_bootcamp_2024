import { useState } from 'react';

const apiKey = import.meta.env.VITE_REACT_APP_DOMAIN;

function App() {

  return (
    <>
      <div>
        App Component
        {console.log(apiKey)}
      </div>
    </>
  )
}

export default App
