import React from 'react';

import './Input.css';

const Input = (props) => {
  return (
    <input
      {...props}
      className={`saylua-input ${props.className}`}
      data-error={props.error}
    />
  );
};

export default Input;
