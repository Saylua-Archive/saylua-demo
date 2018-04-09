import React, { Component } from 'react';

import SayluaView from 'components/SayluaView';

import SpeciesListRegion from './SpeciesListRegion';

export default class SpeciesList extends Component {
  render() {
    return (
      <SayluaView>
        <h1>Sprite Species Guide</h1>
        <p>
          The planet of Saylua is full of unique creatures that we call Sprites.
          Sprites are intelligent and have many mysterious abilities that humans
          don&#39;t fully understand.
        </p>
        <SpeciesListRegion icon="fa-globe" region="Universal" description="Found across the planet" />
        <SpeciesListRegion icon="fa-sun" region="Saylian" description="Found on the light side" />
        <SpeciesListRegion icon="fa-moon" region="Luarian" description="Found on the dark side" />
        <SpeciesListRegion icon="fa-adjust" region="Dawnish" description="Found between the sides" />
      </SayluaView>
    );
  }
}
