import React from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import Introduction from 'modules/Introduction';
import LandingPage from 'modules/Introduction/LandingPage';
import CharacterCreation from 'modules/Introduction/CharacterCreation';

import Adventure from 'modules/Adventure';
import Den from 'modules/Den';
import SpriteProfile from 'modules/Den/SpriteProfile';
import ItemShed from 'modules/Den/ItemShed';

import Bloxi from 'modules/Arcade/Bloxi';

import StaticPage from 'modules/StaticPage';

import { MuseumRoot } from 'modules/Museum';
import { TownRoot } from 'modules/Town';

import NotFound from 'modules/Error/NotFound';

export default function (props) {
  return (
    <Provider store={props.store}>
      <HashRouter>
        { props.store.getState().sayluaState.username ?
          <Switch>
            <Route exact path="/" component={Adventure} />
            <Route exact path="/landing" component={LandingPage} />
            <Route path="/register" component={Adventure} />
            <Route path="/intro" component={Introduction} />
            <Route path="/wilderness" component={Adventure} />
            <Route path="/sprites" component={Den} />
            <Route path="/items/:page" component={ItemShed} />
            <Route path="/items" component={ItemShed} />
            <Route path="/arcade/bloxi" component={Bloxi} />
            <Route path="/sprite/:soulName" component={SpriteProfile} />
            { TownRoot }
            { MuseumRoot }
            <Route path="/page/:pageName" component={StaticPage} />
            <Route path="*" status={404} component={NotFound} />
          </Switch>
          :
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/landing" component={LandingPage} />
            <Route path="/register" component={CharacterCreation} />
            <Route path="*" component={LandingPage} />
          </Switch>
        }
      </HashRouter>
    </Provider>);
}
