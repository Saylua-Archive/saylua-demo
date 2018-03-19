"use strict";

import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './Footer.css';

import Clock from './Clock';

// The main Saylua layout component.
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkTheme: false,
    };
  }

  toggleTheme(isDark) {
    this.setState({darkTheme: isDark});
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.darkTheme !== nextState.darkTheme) {
      document.body.classList.toggle("theme-luaria", nextState.darkTheme);
    }
  }

  render() {
    let separator = ' \u2022 ';
    return (
      <footer id="footer">
        <div className="sidebar-filler"></div>
        <div className="footer-content">
          <p>
            <span id="social-icons">
              <a href="https://www.facebook.com/officialsaylua/" target="_blank" rel="noopener">
                <i className="fab fa-fw fa-facebook" aria-hidden="true"></i>
              </a>
              { separator }
              <a href="https://twitter.com/officialsaylua" target="_blank" rel="noopener">
                <i className="fab fa-fw fa-twitter" aria-hidden="true"></i>
              </a>
              { separator }
              <a href="http://saylua.tumblr.com/" target="_blank" rel="noopener">
                <i className="fab fa-fw fa-tumblr" aria-hidden="true"></i>
              </a>
              { separator }
              <a href="https://www.reddit.com/r/saylua" target="_blank" rel="noopener">
                <i className="fab fa-fw fa-reddit" aria-hidden="true"></i>
              </a>
              { separator }
              <a href="https://discord.gg/CPet6aq" target="_blank" rel="noopener">
                <i className="fab fa-fw fa-discord" aria-hidden="true"></i>
              </a>
            </span>
          </p>
          <Clock />
          { separator }
          <a>
            <i className="far fa-fw fa-sun" aria-hidden="true" onClick={this.toggleTheme.bind(this, false)}></i>
          </a>
          { separator }
          <a>
            <i className="far fa-fw fa-moon" aria-hidden="true" onClick={this.toggleTheme.bind(this, true)}></i>
          </a>
          <p>
            &copy; 2018 <Link to="/">Saylua</Link>
          </p>
        </div>
      </footer>
    );
  }
}
