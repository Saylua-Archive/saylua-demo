import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { sayluaApp, initialState } from './store'

import Adventure from './modules/Adventure';
import Den from './modules/Den';
import 'scss/saylua.css';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : initialState;
export let store = createStore(sayluaApp, persistedState);
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

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
