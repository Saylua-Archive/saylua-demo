import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SayluaView from 'modules/SayluaView';
import { speciesIndex, speciesList } from 'models/SpriteSpecies';

export default class CoatView extends Component {
  render() {
    const speciesParam = this.props.match.params.species.toLowerCase();
    const coatParam = this.props.match.params.coat.toLowerCase();

    if (!(speciesParam in speciesIndex)) {
      return <div>404</div>;
    }

    const species = speciesIndex[speciesParam];
    if (!species.coats.includes(coatParam)) {
      return <div>404</div>;
    }

    const coat = coatParam;

    const matchingSpecies = speciesList.filter(s => s.coats.includes(coat));

    return (
      <SayluaView>
        <h1>Species Guide: The {coat} {species.name}</h1>
        <img src={species.imageUrl(coat)} alt={species.name} className="species-view-image" />
        <br />Name: {species.name}
        <br />Plural Form: {species.plural}
        <br />
        <br />Average Weight: {species.weightMean} lbs
        <br />Average {species.sizeName}: {species.sizeMean} in
        <p>
          {species.description}
        </p>
        <div style={{ width: '100%', float: 'left' }}>
          <h2>Similar Coats</h2>
          { matchingSpecies.map(s => (
            <Link to={s.url(coat)} className="sprite-species">
              <img src={s.imageUrl(coat)} alt={s.name} />
              { coat } { s.name }
            </Link>
          ))}
        </div>
      </SayluaView>
    );
  }
}
