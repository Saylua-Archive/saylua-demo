import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import Adventure from './modules/Adventure';
import Den from './modules/Den';
import Bloxi from './modules/Arcade/Bloxi';
import SpriteProfile from './modules/SpriteProfile';

import SpeciesGuide from './modules/SpeciesGuide';

export default function (props) {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        <Switch>
          <Route path="/den" component={Den} />
          <Route path="/arcade/bloxi" component={Bloxi} />
          <Route path="/species" component={SpeciesGuide} />
          <Route path="/sprite/:soulName" component={SpriteProfile} />
          <Route path="*" component={Adventure} />
        </Switch>
      </BrowserRouter>
    </Provider>);
}
