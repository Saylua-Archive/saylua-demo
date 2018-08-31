import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './BefriendedSprite.css';

export default function BefriendedSprite(props) {
  const befriendText = `You've befriended ${props.befriendedCount} ${
    (props.befriendedCount === 1 ? props.name : props.plural) || `of this sprite`}`;
  const img = <img className="befriended-sprite-image" src={props.imgSrc} alt={props.name} />;
  return (
    <div className={`befriended-sprite ${props.className}`}>
      { props.link ?
        <Link to={props.link} className="befriended-sprite-image-wrapper">
          { img }
        </Link>
      :
        <div className="befriended-sprite-image-wrapper">
          { img }
        </div>
      }
      <span className="befriended-sprite-title">
        {props.befriendedCount ?
          <Link to={props.befriendedLink}>
            <i className="befriended-sprite-heart fa fa-fw fa-heart" title={befriendText} />
          </Link>
        : ''}

        { props.link ?
          <Link to={props.link}>
            { props.name }
          </Link>
        :
          props.name
        }
      </span>
    </div>
  );
}
