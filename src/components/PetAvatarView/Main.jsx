import React from 'react';
import { Link } from 'react-router-dom';

import Sprite from 'models/Sprite';

import './PetAvatarView.css';

export default function PetAvatarView(props) {
  const username = props.username;
  const companion = props.companion;
  return (
    <div className="pet-avatar-view">
      <Link className="avatar-view" to="/user/">
        <img
          src="/img/avatar/base.png"
          alt="human avatar"
          title={`${username}'s Avatar`}
          aria-label={`${username}'s Avatar`}
        />
      </Link>
      {companion ?
        <Link to={Sprite.url(companion)} className="active-pet-view">
          <img
            src={Sprite.imageUrl(companion)}
            className={`active-pet-image ${Sprite.species(companion).facesRight ? '' : 'flipped'}`}
            alt="active companion"
            title={Sprite.fullName(companion)}
            aria-label={Sprite.fullName(companion)}
          />
        </Link>
      : ''}
    </div>
  );
}
