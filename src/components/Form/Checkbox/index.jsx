import React from 'react';

import './Checkbox.css';

const Checkbox = (props) => {
  return (
    <input
      {...props}
      className={`saylua-checkbox ${props.className}`}
      type="checkbox"
    />
  );
};

export default Checkbox;
