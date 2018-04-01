import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbar-container" className="navbar-container">
        <div id="navbar" className="navbar">
          <div id="navbar-inner-container" className="navbar-inner-container">
            <div className="sidebar-filler" />
            <div className="navbar-block">
              <Link to="/" className="navbar-link" title="Home">
                <i className="fas fa-fw fa-home" aria-hidden="true" />
              </Link>
            </div>
            <div className="navbar-block">
              <Link to="/den" className="navbar-link" title="Your Den">
                Your Den
              </Link>
            </div>
            <div className="navbar-block">
              <Link to="/arcade/bloxi" className="navbar-link" title="Arcade">
                Arcade
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
