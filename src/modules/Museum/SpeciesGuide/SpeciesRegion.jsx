import React from 'react';
import { Link } from 'react-router-dom';

import SpriteSpecies from 'models/SpriteSpecies';

export default function SpeciesRegion(props) {
  return (
    <div className="region-section">
      <h2>
        <i className={`fa fa-fw ${props.icon}`} aria-hidden="true" />
        { props.region } Species
        <small>({ props.description })</small>
      </h2>
      {
        SpriteSpecies.byRegion(props.region).map(species => (
          <Link key={species.canonName} to={SpriteSpecies.url(species)} className="sprite-species">
            <div className="species-image-wrapper">
              <img src={SpriteSpecies.imageUrl(species)} alt={species.name} />
            </div>
            { species.name }
          </Link>
        ))
      }
    </div>
  );
}
