import { useState } from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, text }) => {
  // State to track the button color
  const [buttonColor, setButtonColor] = useState('blue');

  // Function to handle button click
  const handleClick = () => {
    // Change button color to red
    setButtonColor('red');
    // Call onClick function if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} style={{ backgroundColor: buttonColor }}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
};

export default Button;
