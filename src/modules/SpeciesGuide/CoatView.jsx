import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SayluaView from 'components/SayluaView';
import { speciesIndexCanonName, speciesList } from 'models/SpriteSpecies';

export default class CoatView extends Component {
  render() {
    const speciesParam = this.props.match.params.species.toLowerCase();
    const coatParam = this.props.match.params.coat.toLowerCase();

    if (!(speciesParam in speciesIndexCanonName)) {
      return <div>404</div>;
    }

    const species = speciesIndexCanonName[speciesParam];
    if (!species.coats.includes(coatParam)) {
      return <div>404</div>;
    }

    const coat = coatParam;

    const matchingSpecies = speciesList.filter(s => s.coats.includes(coat));

    return (
      <SayluaView>
        <h1>Species Guide: The {coat} {species.name}</h1>
        <img src={species.imageUrl(coat)} alt={species.name} className="species-view-image" />
        <div style={{ width: '100%', float: 'left' }}>
          <h2>Similar Coats</h2>
          <div className="coat-grid">
            { matchingSpecies.map(s => (
              <Link to={s.url(coat)} className="coat-grid-item">
                <img src={s.imageUrl(coat)} alt={s.name} />
                { coat } { s.name }
              </Link>
            ))}
          </div>
        </div>
      </SayluaView>
    );
  }
}
