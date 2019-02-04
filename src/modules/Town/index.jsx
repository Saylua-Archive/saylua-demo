import React from 'react';
import { Link, Route } from 'react-router-dom';

import SayluaView from 'components/SayluaView';

import Reserve from './Reserve';
import Shop from './Shop';

import './Town.css';

export default function Town() {
  return (
    <SayluaView title="The Town">
      <h1>The Town</h1>
      <ul className="town-links">
        <li>
          <Link to="/reserve">The Reserve</Link> A lovely reserve where you
            can adopt sprites without homes.
        </li>
        <li>
          <Link to="/shop/rufus">The Emporium</Link> A shop
            that sells most things you could want.
        </li>
      </ul>
    </SayluaView>
  );
}

// The routes for the Museum.
export const TownRoot = [
  <Route key="Reserve" path="/reserve" component={Reserve} />,
  <Route key="Shop" path="/shop/:character" component={Shop} />,
  <Route key="Town" path="/town" component={Town} />,
];
