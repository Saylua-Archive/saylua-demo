import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import initialState from 'reducers/initialState';
import sayluaReducer from 'reducers/sayluaReducer';

import Root from './Root';

import 'scss/saylua.css';

const persistedState = localStorage.getItem('sayluaState') ?
  JSON.parse(localStorage.getItem('sayluaState')) : initialState;

const reducer = combineReducers({
  sayluaState: sayluaReducer,
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
  if (currentStore.sayluaState.theme !== previousTheme) {
    document.body.setAttribute('data-theme', currentStore.sayluaState.theme);
  }
  currentTheme = currentStore.sayluaState.theme;
  localStorage.setItem('sayluaState', JSON.stringify(currentStore));
});

document.body.setAttribute('data-theme', store.getState().theme);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
