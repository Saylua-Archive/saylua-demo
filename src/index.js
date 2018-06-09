import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { sayluaReducer, initialState } from 'SayluaStore';

import Root from './Root';

import 'scss/saylua.css';

const persistedState = localStorage.getItem('sayluaState') ?
  JSON.parse(localStorage.getItem('sayluaState')) : initialState;

const reducer = combineReducers({
  sayluaApp: sayluaReducer,
  form: formReducer,
});

export const store = createStore(
  reducer, persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

let currentTheme;
store.subscribe(() => {
  const previousTheme = currentTheme;
  const currentStore = store.getState();
  if (currentStore.sayluaApp.theme !== previousTheme) {
    document.body.setAttribute('data-theme', currentStore.sayluaApp.theme);
  }
  currentTheme = currentStore.sayluaApp.theme;
  localStorage.setItem('sayluaState', JSON.stringify(currentStore));
});

document.body.setAttribute('data-theme', store.getState().theme);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
