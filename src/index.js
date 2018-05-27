import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { sayluaApp, initialState } from './store';

import Root from './Root';

import 'scss/saylua.css';

const persistedState = localStorage.getItem('sayluaState') ?
  JSON.parse(localStorage.getItem('sayluaState')) : initialState;
export const store = createStore(sayluaApp, persistedState);

let currentTheme;
store.subscribe(() => {
  const previousTheme = currentTheme;
  const currentStore = store.getState();
  if (currentStore.theme !== previousTheme) {
    document.body.setAttribute('data-theme', currentStore.theme);
  }
  localStorage.setItem('sayluaState', JSON.stringify(currentStore));
});

document.body.setAttribute('data-theme', store.getState().theme);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
