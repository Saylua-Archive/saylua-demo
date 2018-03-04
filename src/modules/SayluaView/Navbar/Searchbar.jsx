import React, { Component } from 'react';

import './Searchbar.css';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="search navbar-block" action="/search/">
        <input type="text" placeholder="Search Saylua" name="q" />
        <button><i className="fa fa-fw fa-search" aria-hidden="true" title="Search"></i></button>
      </form>
    );
  }
}
