import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { pluralize } from 'utils';

import './Sidebar.css';


export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="sidebar" className="sidebar">
        <div id="user-info-section" className="sidebar-section">
          <p>You are <Link to="/user/tiff/">Tiff</Link></p>
          <p>Your companion is <Link to="/companion/">Companion Name</Link></p>
          <p>
            <img src="/img/icons/weather_clouds.png" />
            <Link to="/bank/"> { pluralize(5, 'Cloud Coin') } </Link>
          </p>
          <p>
            <img src="/img/icons/star_1.png" />
            <Link to="/bank/"> { pluralize(1, 'Star Shard') } </Link>
          </p>
        </div>
      </div>
    );
  }
}
