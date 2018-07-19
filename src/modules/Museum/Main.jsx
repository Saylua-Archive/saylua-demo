import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import SayluaView from 'components/SayluaView';

import SpeciesGuide from './SpeciesGuide';
import SpeciesView from './SpeciesGuide/SpeciesView';
import CoatGuide from './CoatGuide';

import './Museum.css';

export default class Museum extends Component {
  render() {
    return (
      <SayluaView title="Museum of Natural History">
        <h1>The Saylua Museum of Natural History</h1>
        <p>
          {`Please, take a look around my museum! I have a lot of interesting
          information that I've collected over the years... Let me know if you
          have any questions!`}
        </p>
        <ul className="museum-guides">
          <li>
            <Link to="/species">The Species Guide</Link> Vera and I have
              worked on this guide for years! And yet we still feel like there
              are so many more sprite species for us to discover.
          </li>
          <li>
            <Link to="/coats">The Coat Guide</Link> {`The sprites we've met
              have a variety of different coats.`}
          </li>
        </ul>
      </SayluaView>
    );
  }
}

// The routes for the Museum.
export const MuseumRoot = [
  <Route key="SpeciesView" path="/species/:species" component={SpeciesView} />,
  <Route key="SpeciesGuide" path="/species" component={SpeciesGuide} />,
  <Route key="CoatGuide" path="/coats" component={CoatGuide} />,
  <Route key="Museum" path="/museum" component={Museum} />,
];
