import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css';

import Dropdown from './Dropdown';
import Searchbar from './Searchbar';

import { dropdownContent } from './DropdownContent';

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
                <i className="fa fa-fw fa-home" aria-hidden="true"></i>
              </Link>
            </div>
            {
              dropdownContent.map((menu, i) => {
                return <Dropdown key={ i.toString() } icon={ menu.icon }
                  name={ menu.name } content={ menu.content } />
              })
            }

            <Searchbar />

          </div>
        </div>
      </div>
    );
  }
}
