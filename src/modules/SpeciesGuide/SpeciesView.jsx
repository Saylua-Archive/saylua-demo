import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SayluaView from 'components/SayluaView';
import SpriteSpecies from 'models/SpriteSpecies';

export default class SpeciesView extends Component {
  render() {
    const speciesParam = this.props.match.params.species.toLowerCase();
    const species = SpriteSpecies.byCanonName(speciesParam);
    if (!species) {
      return <div>404</div>;
    }
    return (
      <SayluaView>
        <h1>Species Guide: The {species.name}</h1>
        <div className="species-view-info">
          <div className="species-view-image">
            <img src={species.imageUrl()} alt={species.name} />
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
          </div>
        </div>

        <div style={{ width: '100%', float: 'left' }}>
          <h2>Discovered {species.name} Coats</h2>
          <div className="coat-grid">
            { species.coats.map(coat => (
              <Link to={species.url(coat)} className="coat-grid-item">
                <img src={species.imageUrl(coat)} alt={species.name} />
                { coat } { species.name }
              </Link>
            ))}
          </div>
        </div>
      </SayluaView>
    );
  }
}
