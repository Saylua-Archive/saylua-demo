import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SayluaView from 'modules/SayluaView';
import { speciesList } from 'models/SpriteSpecies';

export default class SpeciesList extends Component {
  render() {
    return (
      <SayluaView>
        <h1>Sprite Species Guide</h1>
        <p>
          The planet of Saylua is full of many mysterious creatures called
          Sprites.
        </p>
        { speciesList.map(species => (
          <Link to={species.url()} className="sprite-species">
            <img src={species.imageUrl()} alt={species.name} />
            { species.name }
          </Link>
        )) }
      </SayluaView>
    );
  }
}
