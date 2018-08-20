import React from 'react';

import './SpriteHeader.css';

const SpriteHeader = (props) => {
  const imageUrl = props.imageUrl;
  const title = props.title;
  return (
    <h2 className="sprite-header">
      <div className="sprite-header-icon">
        <img src={imageUrl} alt={title} title={title} />
      </div>
      { props.children }
    </h2>
  );
};

export default SpriteHeader;
