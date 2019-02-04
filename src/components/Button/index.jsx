import React from 'react';

import './Button.css';

const Button = (props) => {
  const { subtle, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={`saylua-button ${subtle ? 'subtle-button' : ''} ${props.className}`}
    >
      { props.children }
    </button>
  );
};

export default Button;
