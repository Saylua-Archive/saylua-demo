import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import Adventure from 'modules/Adventure';
import Den from 'modules/Den';
import Bloxi from 'modules/Arcade/Bloxi';
import SpriteProfile from 'modules/SpriteProfile';

import { MuseumRoot } from 'modules/Museum';

import NotFound from 'modules/Error/NotFound';

export default function (props) {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Adventure} />
          <Route path="/den" component={Den} />
          <Route path="/arcade/bloxi" component={Bloxi} />
          <Route path="/sprite/:soulName" component={SpriteProfile} />
          { MuseumRoot }
          <Route path="*" status={404} component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>);
}
