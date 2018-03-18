"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { sayluaApp, addCoins, accompany } from './store'

import Adventure from './modules/Adventure';
import Den from './modules/Den';
import 'scss/saylua.css';
 
let store = createStore(sayluaApp);

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/den" component={ Den } />
        <Route path="*" component={ Adventure } />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
