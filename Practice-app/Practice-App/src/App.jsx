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
    <a href='https://github.com/Glen357'>Checkout My GitHub Profile</a>
    <div className='image_container'>
      
    <img src="2024-04-11 (2).png" alt="Glens Github" />
    

    </div>
    </>
  );
};

export default App;
