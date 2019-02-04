import React from 'react';
import './RadioInput.css';


const RadioInput = (props) => {
  return (
    <input
      {...props}
      className="saylua-radio"
      type="radio"
    />
  );
};

export default RadioInput;
