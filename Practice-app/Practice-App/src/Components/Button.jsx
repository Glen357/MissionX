import { useState } from 'react'; 
// the above import is a useState it is is a Hook that allows functional components to manage state by providing a simpler shorter syntax
import PropTypes from 'prop-types';
// the above import is a propType this is a way to specify the expected data type of each property passed to a component


// this Const decleration is a button you can click on the browser. It is only simple, and has an initial state of being blue in colour
//  The state is the original form (buttonColor 'blue') and the setState is what you are changing it to (seButtonColor 'Red')
const Button = ({ onClick, text }) => {
  // State to track the button color
  const [buttonColor, setButtonColor] = useState('blue');


  // This Function is the piece of code that handles what happens when you click the button, which changes the button colour to red
  
  const handleClick = () => {
    // Change button colour to red
    setButtonColor('red');
    
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

// 
Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
};

export default Button;
