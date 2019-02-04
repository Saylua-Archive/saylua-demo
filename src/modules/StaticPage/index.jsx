import React from 'react';

import NotFound from 'modules/Error/NotFound';

import * as pages from './Pages';

export default function StaticPage(props) {
  const pageName = props.match.params.pageName.toLowerCase();

  if (pageName in pages) {
    return pages[pageName]();
  }
  return <NotFound />;
}
