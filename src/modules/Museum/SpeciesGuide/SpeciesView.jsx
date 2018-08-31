import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

import { companionsBySpeciesSelector } from 'reducers/selectors';

import SayluaView from 'components/SayluaView';
import Sprite from 'models/Sprite';
import SpriteSpecies, { speciesList } from 'models/SpriteSpecies';
import SpriteCoat from 'models/SpriteCoat';

import NotFound from 'modules/Error/NotFound';

import BefriendedSprite from '../components/BefriendedSprite';
import './SpeciesView.css';

const mapStateToProps = state =>
  ({
    companionsBySpecies: companionsBySpeciesSelector(state),
  });

class SpeciesView extends Component {
  render() {
    const speciesParam = this.props.match.params.species.toLowerCase();
    const species = SpriteSpecies.fromCanonName(speciesParam);
    if (!species) {
      return <NotFound />;
    }

    const friends = species.id in this.props.companionsBySpecies ?
      this.props.companionsBySpecies[species.id] :
      [];

    const zeroIndex = species.id - 1;
    const next = speciesList[(zeroIndex + 1) % speciesList.length];
    const prev = speciesList[((zeroIndex - 1) + speciesList.length) % speciesList.length];

    return (
      <SayluaView title={`The ${species.name}`}>
        <Link to={SpriteSpecies.url(prev)} className="species-prev-link">
          &larr; Prev <img src={SpriteSpecies.imageUrl(prev)} alt={prev.name} />
        </Link>
        <Link to={SpriteSpecies.url(next)} className="species-next-link">
          <img src={SpriteSpecies.imageUrl(next)} alt={prev.name} /> Next &rarr;
        </Link>

        <h1>Species Guide: The {species.name}</h1>
        <div className="breadcrumbs">
          <Link to="/museum" className="breadcrumbs-link">Museum</Link>
          <span className="separator">
            &raquo;
          </span>
          <Link to="/guide/species" className="breadcrumbs-link">Species Guide</Link>
          <span className="separator">
            &raquo;
          </span>
          <Link
            to={SpriteSpecies.url(species)}
            className="breadcrumbs-link breadcrumbs-active"
          >The {species.name}</Link>
        </div>
        <div className="species-view-info">
          <div className="species-view-image">
            <BefriendedSprite
              imgSrc={SpriteSpecies.imageUrl(species)}
              name={species.name}
              plural={species.plural}
              befriendedCount={friends.length}
              befriendedLink="#befriended"
            />
          </div>
          <div>
            <br />Name: {species.name}
            <br />Plural Form: {species.plural}
            <br />
            <br />Average Weight: {species.weightMean} lbs
            <br />Average {species.sizeName}: {species.sizeMean} in
            <p>
              {species.description}
            </p>
            {species.quotes.map(quote => (
              <p>
                {`"${quote.text}" - ${quote.attribution}`}
              </p>
            ))}
          </div>
        </div>

        <div style={{ width: '100%', float: 'left' }}>
          <h2>Discovered {species.name} Coats</h2>
          <div className="coat-grid">
            { SpriteSpecies.coats(species).map(coat => (
              <Link
                key={SpriteCoat.variant(coat).canonName}
                to={`${SpriteCoat.url(coat)}`}
                className="coat-grid-item"
              >
                <img src={SpriteCoat.imageUrl(coat)} alt={SpriteCoat.name(coat)} />
                { SpriteCoat.name(coat) }
              </Link>
            ))}
          </div>
        </div>

        { friends.length ?
          <div id="befriended" style={{ width: '100%', float: 'left' }}>
            <h2>{species.plural} Befriended</h2>
            <div className="coat-grid">
              { friends.map(friend => (
                <Link
                  key={friend.soulName}
                  to={Sprite.url(friend)}
                  className="coat-grid-item"
                >
                  <img src={Sprite.imageUrl(friend)} alt={friend.name} />
                  { friend.name }
                </Link>
              ))}
            </div>
          </div>
          : ''
        }
      </SayluaView>
    );
  }
}

export default connect(mapStateToProps)(SpeciesView);
