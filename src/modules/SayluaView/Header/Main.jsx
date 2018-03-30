import React, { Component } from 'react';

import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div id="header" className="header">
        <a id="logo" href="/" className="logo">
          <img id="logo-image" src="/img/logo.png" alt="Saylua" title="Saylua" />
        </a>
      </div>
    );
  }
}
