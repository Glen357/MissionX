// import { useState } from 'react'
import './App.css'
// import React from 'react';
import Button from './Components/Button';

const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <>
    <div>
      <h1>Code For Fun</h1>
      <Button onClick={handleClick} text="Press Me!" />
    </div>
    </>
  );
};

export default App;
