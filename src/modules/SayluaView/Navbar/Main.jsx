import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let loggedIn = false;
    return (
      <div id="navbar-container" className="navbar-container">
        <div id="navbar" className="navbar">
          <div id="navbar-inner-container" className="navbar-inner-container">
            <div className="sidebar-filler"></div>
            <div className="navbar-block">
              <Link to="/" className="navbar-link" title="Home">
                <i className="fas fa-fw fa-home" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="navbar-block">
              <Link to="/" className="navbar-link" title="Your Den">
                <div>Adventure</div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
