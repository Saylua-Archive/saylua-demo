import React from 'react';

import './TextArea.css';

const TextArea = (props) => {
  return (
    <textarea
      {...props}
      className={`saylua-textarea ${props.className}`}
      data-error={props.error}
    />
  );
};

export default TextArea;
