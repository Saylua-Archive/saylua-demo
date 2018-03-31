import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div id="header" className="header">
        <Link to="/" className="logo" title="Logo">
          <img id="logo-image" src="/img/logo.png" alt="Saylua" title="Saylua" />
        </Link>
      </div>
    );
  }
}
