import React from 'react';
import './SpritePortrait.css';

const SPRITE_SIZE = 350;

function SpritePortrait(props) {
  const imageUrl = props.imageUrl;
  const portraitCoordinates = props.portraitCoordinates;
  const name = props.name;
  const sizeMultiplier = 100 / portraitCoordinates.size;
  const imageSizePercent = sizeMultiplier * SPRITE_SIZE;
  return (
    <div className={`sprite-portrait ${props.className}`}>
      <img
        style={{
          height: `${imageSizePercent}%`,
          width: `${imageSizePercent}%`,
          top: `${sizeMultiplier * -portraitCoordinates.y}%`,
          left: `${sizeMultiplier * -portraitCoordinates.x}%`,
        }}
        src={imageUrl}
        alt={name}
        title={name}
      />
    </div>
  );
}

export default SpritePortrait;
