import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route path="*" component={ App } />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
