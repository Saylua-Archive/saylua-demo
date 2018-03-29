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

const persistedState = localStorage.getItem('sayluaState') ? JSON.parse(localStorage.getItem('sayluaState')) : initialState;
export let store = createStore(sayluaApp, persistedState);

let currentTheme;
store.subscribe(() => {
  let previousTheme = currentTheme;
  let currentStore = store.getState();
  if (currentStore.theme !== previousTheme) {
    document.body.classList.toggle("theme-luaria", currentStore.theme === 'night');
  }
  localStorage.setItem('sayluaState', JSON.stringify(currentStore));
});

document.body.classList.toggle("theme-luaria", store.getState().theme === 'night');

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
