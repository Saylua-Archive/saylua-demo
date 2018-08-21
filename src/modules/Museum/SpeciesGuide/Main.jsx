import React from 'react';
import { Link } from 'react-router-dom';

import SayluaView from 'components/SayluaView';
import DialogueBox from 'components/DialogueBox';
import Character, { CHARACTERS } from 'models/Character';
import { REGIONS } from 'models/SpriteSpecies/constants';

import SpeciesRegion from './SpeciesRegion';
import './SpeciesGuide.css';
import './Breadcrumbs.css';

export default function SpeciesGuide() {
  return (
    <SayluaView title="Sprite Species Guide">
      <h1>Sprite Species Guide</h1>
      <div className="breadcrumbs">
        <Link to="/museum" className="breadcrumbs-link">Museum</Link>
        <span className="separator">
          &raquo;
        </span>
        <Link to="/guide/species" className="breadcrumbs-link breadcrumbs-active">Species Guide</Link>
        <Link to="/guide/coats" className="breadcrumbs-link">Coat Guide</Link>
      </div>
      <DialogueBox character={Character.fromId(CHARACTERS.LUANA)}>
        The planet of Saylua is full of unique creatures that we call Sprites.
        Sprites are intelligent and have many mysterious abilities that humans
        don&#39;t fully understand.
      </DialogueBox>
      <SpeciesRegion icon="fa-globe" region={REGIONS.UNIVERSAL} description="Found across the planet" />
      <SpeciesRegion icon="fa-sun" region={REGIONS.SAYLIAN} description="Found on the light side" />
      <SpeciesRegion icon="fa-moon" region={REGIONS.LUARIAN} description="Found on the dark side" />
      <SpeciesRegion icon="fa-adjust" region={REGIONS.DAWNISH} description="Found between the sides" />
    </SayluaView>
  );
}
