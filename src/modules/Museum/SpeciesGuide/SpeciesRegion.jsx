import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { companionsBySpeciesSelector } from 'reducers/selectors';
import SpriteSpecies from 'models/SpriteSpecies';

import BefriendedSprite from '../components/BefriendedSprite';

const mapStateToProps = state =>
  ({
    companionsBySpecies: companionsBySpeciesSelector(state),
  });

function SpeciesRegion(props) {
  return (
    <div className="region-section">
      <h2>
        <i className={`fa fa-fw ${props.icon}`} aria-hidden="true" />
        { props.region } Species
        <small>({ props.description })</small>
      </h2>
      {
        SpriteSpecies.byRegion(props.region).map(species => (
          <BefriendedSprite
            key={species.canonName}
            className="sprite-species"
            link={SpriteSpecies.url(species)}
            imgSrc={SpriteSpecies.imageUrl(species)}
            name={species.name}
            plural={species.plural}
            befriendedCount={species.id in props.companionsBySpecies ?
              props.companionsBySpecies[species.id].length : 0}
            befriendedLink={`${SpriteSpecies.url(species)}#befriended`}
            hoverable
          />
        ))
      }
    </div>
  );
}

export default connect(mapStateToProps)(SpeciesRegion);
