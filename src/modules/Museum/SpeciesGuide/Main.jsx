import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SayluaView from 'components/SayluaView';

import SpeciesRegion from './SpeciesRegion';
import './SpeciesGuide.css';
import './Breadcrumbs.css';

export default class SpeciesGuide extends Component {
  render() {
    return (
      <SayluaView title="Sprite Species Guide">
        <h1>Sprite Species Guide</h1>
        <div className="breadcrumbs">
          <Link to="/museum" className="breadcrumbs-link">Museum</Link>
          <span className="separator">
            &raquo;
          </span>
          <Link to="/species" className="breadcrumbs-link breadcrumbs-active">Species Guide</Link>
          <Link to="/coats" className="breadcrumbs-link">Coat Guide</Link>
        </div>
        <p>
          The planet of Saylua is full of unique creatures that we call Sprites.
          Sprites are intelligent and have many mysterious abilities that humans
          don&#39;t fully understand.
        </p>
        <SpeciesRegion icon="fa-globe" region="Universal" description="Found across the planet" />
        <SpeciesRegion icon="fa-sun" region="Saylian" description="Found on the light side" />
        <SpeciesRegion icon="fa-moon" region="Luarian" description="Found on the dark side" />
        <SpeciesRegion icon="fa-adjust" region="Dawnish" description="Found between the sides" />
      </SayluaView>
    );
  }
}
