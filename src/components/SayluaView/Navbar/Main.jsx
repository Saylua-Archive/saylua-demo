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
              <Link to="/" className="navbar-link" title="My Den">
                <i className="fas fa-fw fa-home" aria-hidden="true" />
              </Link>
              <Link to="/sprites" className="navbar-link" title="My Sprites">
                <i className="fas fa-fw fa-paw" aria-hidden="true" />
              </Link>
              <Link to="/items" className="navbar-link" title="My Items">
                <i className="fas fa-fw fa-suitcase" aria-hidden="true" />
              </Link>
            </div>
            <div className="navbar-block">
              <Link to="/wilderness" className="navbar-link" title="Item Shed">
                Wilderness
              </Link>
            </div>
            <div className="navbar-block">
              <Link to="/arcade/bloxi" className="navbar-link" title="Arcade">
                Arcade
              </Link>
            </div>
            <div className="navbar-block">
              <Link to="/museum" className="navbar-link" title="Museum of Saylua">
                Museum
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
