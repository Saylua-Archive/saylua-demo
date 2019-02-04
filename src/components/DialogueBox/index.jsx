import React from 'react';

import Character from 'models/Character';

import './DialogueBox.css';

const DialogueBox = (props) => {
  const character = props.character;
  return (
    <div className="dialogue-box">
      {character &&
        <img
          className="dialogue-box-portrait"
          src={Character.portraitUrl(character)}
          alt={character.name}
          title={character.name}
        />
      }
      <div className="dialogue-box-text">
        { props.children }
      </div>
    </div>
  );
};

export default DialogueBox;
