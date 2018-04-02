import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SayluaView from 'modules/SayluaView';
import { speciesIndex } from 'models/SpriteSpecies';

export default class SpeciesView extends Component {
  render() {
    const speciesParam = this.props.match.params.species.toLowerCase();
    if (!(speciesParam in speciesIndex)) {
      return <div>404</div>;
    }
    const species = speciesIndex[speciesParam];
    return (
      <SayluaView>
        <h1>Species Guide: The {species.name}</h1>
        <img src={species.imageUrl()} alt={species.name} className="species-view-image" />
        <br />Name: {species.name}
        <br />Plural Form: {species.plural}
        <br />
        <br />Average Weight: {species.weightMean} lbs
        <br />Average {species.sizeName}: {species.sizeMean} in
        <p>
          {species.description}
        </p>
        <div style={{ width: '100%', float: 'left' }}>
          <h2>Discovered {species.name} Coats</h2>
          { species.coats.map(coat => (
            <Link to={species.url(coat)} className="sprite-species">
              <img src={species.imageUrl(coat)} alt={species.name} />
              { coat } { species.name }
            </Link>
          ))}
        </div>
      </SayluaView>
    );
  }
}
