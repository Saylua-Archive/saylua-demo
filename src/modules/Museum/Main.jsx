import React from 'react';
import { Link, Route } from 'react-router-dom';

import Character, { CHARACTERS } from 'models/Character';
import SayluaView from 'components/SayluaView';
import DialogueBox from 'components/DialogueBox';

import SpeciesGuide from './SpeciesGuide';
import SpeciesView from './SpeciesGuide/SpeciesView';
import CoatGuide from './CoatGuide';
import ItemGuide from './ItemGuide';

import './Museum.css';

export default function Museum() {
  return (
    <SayluaView title="Museum of Natural History">
      <h1>The Saylua Museum of Natural History</h1>
      <DialogueBox character={Character.fromId(CHARACTERS.LUANA)}>
        {`Please, take a look around my museum! I have a lot of interesting
        information that I've collected over the years... Let me know if you
        have any questions!`}
      </DialogueBox>
      <ul className="museum-guides">
        <li>
          <Link to="/guide/species">
            <div className="museum-guide-image-container">
              <img src="/img/sprites/eydrun/luarian.png" alt="Eydrun" />
            </div>
            The Species Guide
          </Link>
            Vera and I have
            worked on this guide for years! And yet we still feel like there
            are so many more sprite species for us to discover.
        </li>
        <li>
          <Link to="/guide/coats">
            <div className="museum-guide-image-container">
              <img src="/img/sprites/senrix/albino.png" alt="Albino Senrix" />
              <img src="/img/sprites/senrix/melanistic.png" alt="Melanistic Senrix" />
              <img src="/img/sprites/senrix/piebald.png" alt="Piebald Senrix" />
            </div>
            The Coat Guide
          </Link>
          {`Sprites are more than
            just their species! We've found many different unique coat
            variants for each sprite type, and you can learn about them
            here.`}
        </li>
        <li>
          <Link to="/guide/items">
            <div className="museum-guide-image-container">
              <img src="/img/items/treat/glow_fruit.png" alt="Glowing fruit" />
            </div>
            The Item Archive
          </Link>
          {`Saylua is full of many
            unusual objects. We've worked closely with Rufus Scippio to try
            to document as many of these items as we can!`}
        </li>
      </ul>
    </SayluaView>
  );
}

// The routes for the Museum.
export const MuseumRoot = [
  <Route key="SpeciesView" path="/guide/species/:species" component={SpeciesView} />,
  <Route key="SpeciesGuide" path="/guide/species" component={SpeciesGuide} />,
  <Route key="CoatGuide" path="/guide/coats" component={CoatGuide} />,
  <Route key="ItemGuide" path="/guide/items" component={ItemGuide} />,
  <Route key="Museum" path="/museum" component={Museum} />,
];
