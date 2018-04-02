import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import SayluaView from 'modules/SayluaView';

import SpeciesList from './SpeciesList';
import SpeciesView from './SpeciesView';
import CoatView from './CoatView';

import './SpeciesGuide.css';

export default class SpeciesGuide extends Component {
  render() {
    return (
      <Switch>
        <Route path="/species/:species/:coat" component={CoatView} />
        <Route path="/species/:species" component={SpeciesView} />
        <Route path="/species" component={SpeciesList} />
      </Switch>
    );
  }
}
