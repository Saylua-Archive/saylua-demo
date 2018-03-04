import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './Footer.css';

import StaffActions from './StaffActions';
import Clock from './Clock';

// The main Saylua layout component.
export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let separator = ' \u2022 ';
    return (
      <footer id="footer">
        <div className="sidebar-filler"></div>
        <div className="footer-content">
          <StaffActions level="moderation" />
          <StaffActions level="admin" />
          <p>
            <Link to="/online/">1 Online</Link> { separator }
            <Link to="#" onClick={ window.scrollTo(0, 0) }>Back to Top</Link> { separator }
            <Link to="/page/about/">About</Link> { separator }
            <Link to="/page/credits/">Credits</Link> { separator }
            <Link to="/page/terms/">Terms of Service</Link> { separator }
            <Link to="/page/rules/">Site Rules</Link> { separator }
            <Link to="/page/contact/">Contact Us</Link> { separator }
            <span id="social-icons">
              <a href="https://www.facebook.com/officialsaylua/" target="_blank" rel="noopener">
                <i className="fa fa-fw fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/officialsaylua" target="_blank" rel="noopener">
                <i className="fa fa-fw fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="http://saylua.tumblr.com/" target="_blank" rel="noopener">
                <i className="fa fa-fw fa-tumblr" aria-hidden="true"></i>
              </a>
              <a href="https://www.reddit.com/r/saylua" target="_blank" rel="noopener">
                <i className="fa fa-fw fa-reddit" aria-hidden="true"></i>
              </a>
            </span>
          </p>
          <form method="post" action="">
            <Clock />
            { separator }
            <button className="link-button" name="theme_id" value="0">
              <i className="fa fa-fw fa-sun-o" aria-hidden="true"></i>
            </button>
            { separator }
            <button className="link-button" name="theme_id" value="1">
              <i className="fa fa-fw fa-moon-o" aria-hidden="true"></i>
            </button>
          </form>
          <p>
            &copy; 2016 <Link to="/">Saylua</Link>
          </p>
          <p>
            <Link to="/admin/">Admin Panel</Link>
          </p>
        </div>
      </footer>
    );
  }
}
