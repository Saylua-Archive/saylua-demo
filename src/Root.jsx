import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import Adventure from './modules/Adventure';
import Den from './modules/Den';
import Bloxi from './modules/Arcade/Bloxi';

import SpeciesGuide from './modules/SpeciesGuide';

export function Root(props) {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        <Switch>
          <Route path="/den" component={Den} />
          <Route path="/arcade/bloxi" component={Bloxi} />
          <Route path="/species" component={SpeciesGuide} />
          <Route path="*" component={Adventure} />
        </Switch>
      </BrowserRouter>
    </Provider>);
}
