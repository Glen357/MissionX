// import { useState } from 'react'
import './App.css'
// import React from 'react';
import Button from './Components/Button';
// import statement importing the button component I created

// this const declares the the app then the handle click function
const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
//  This is a return statement that contains what will be displayed on the browser, there is an h1(main title), a button component, that calls the button componet import
//  and the onclick function it utilises Then there is a link to my GitHub Profile, followed by a div that has a className to define that portion of the code so that 
// you can better style just that part with your css, this contains an image

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
// The export is a way of defining what the page is named so that it can be imported and called by the main jsx file