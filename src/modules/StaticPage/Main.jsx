import React, { Component } from 'react';

import NotFound from 'modules/Error/NotFound';

import * as pages from './Pages';

export default class StaticPage extends Component {
  render() {
    const pageName = this.props.match.params.pageName.toLowerCase();

    if (pageName in pages) {
      return pages[pageName]();
    }
    return <NotFound />;
  }
}
