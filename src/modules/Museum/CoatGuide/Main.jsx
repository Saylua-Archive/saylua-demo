import React from 'react';
import { Link } from 'react-router-dom';

import { randomChoice } from 'utils';
import SpriteCoat from 'models/SpriteCoat';
import { variantsList } from 'models/SpriteCoat/CoatVariant';
import Character, { CHARACTERS } from 'models/Character';
import DialogueBox from 'components/DialogueBox';
import SayluaView from 'components/SayluaView';
import SpriteHeader from 'components/SpriteHeader';

import './CoatGuide.css';

export default function CoatGuide() {
  return (
    <SayluaView title="Sprite Coat Guide">
      <h1>Sprite Coat Guide</h1>
      <div className="breadcrumbs">
        <Link to="/museum" className="breadcrumbs-link">Museum</Link>
        <span className="separator">
          &raquo;
        </span>
        <Link to="/guide/species" className="breadcrumbs-link">Species Guide</Link>
        <Link to="/guide/coats" className="breadcrumbs-link breadcrumbs-active">Coat Guide</Link>
      </div>
      <DialogueBox character={Character.fromId(CHARACTERS.LUANA)}>
        Each species of sprite on Saylua can be found in a variety of different
        coats. See them all here!
      </DialogueBox>
      {
        variantsList.map((variant) => {
          const coats = SpriteCoat.byVariant(variant.id);
          const randomCoat = randomChoice(coats);
          return (
            <div key={`${variant.canonName}`} className="coat-guide-list" id={`${variant.canonName}`}>
              <SpriteHeader imageUrl={SpriteCoat.imageUrl(randomCoat)} title={SpriteCoat.name(randomCoat)}>
                <Link to={`#${variant.canonName}`}>{ variant.name } Coats</Link>
              </SpriteHeader>
              {
                coats.map(coat => (
                  <img key={SpriteCoat.name(coat)} src={SpriteCoat.imageUrl(coat)} alt={SpriteCoat.name(coat)} />
                ))
              }
            </div>
          );
        })
      }
    </SayluaView>
  );
}
