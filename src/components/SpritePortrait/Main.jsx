import React from 'react';
import ResizeAware from 'react-resize-aware';

import './SpritePortrait.css';

const SPRITE_SIZE = 350;

function SpritePortraitInner(props) {
  const imageUrl = props.imageUrl;
  const portraitCoordinates = props.portraitCoordinates;
  const name = props.name;
  const size = Math.min(props.width, props.height);
  const sizeMultiplier = size / portraitCoordinates.size;
  const imageSize = sizeMultiplier * SPRITE_SIZE;
  return (
    <img
      style={{
        height: imageSize,
        width: imageSize,
        top: sizeMultiplier * -portraitCoordinates.y,
        left: sizeMultiplier * -portraitCoordinates.x,
      }}
      src={imageUrl}
      alt={name}
      title={name}
    />
  );
}

function SpritePortrait(props) {
  return (
    <ResizeAware className={`sprite-portrait ${props.className}`}>
      <SpritePortraitInner {...props} />
    </ResizeAware>
  );
}

export default SpritePortrait;
