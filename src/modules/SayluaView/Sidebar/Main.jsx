import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { pluralize } from 'utils';

import './Sidebar.css';

const mapStateToProps = ({ coins, activeCompanion }) =>
    ({ coins, activeCompanion });
const mapDispatchToProps = {};

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar" className="sidebar">
        <div id="user-info-section" className="sidebar-section">
          <img className="petView" src={ this.props.activeCompanion ?
            "/img/pets/" + this.props.activeCompanion.species + "/common.png" :
            ""
          }/>
          <p>You are <Link to="/user/tiff/">Tiff</Link></p>
          <p>Your companion is <Link to="/companion/">{ this.props.activeCompanion ? this.props.activeCompanion.name : "" }</Link></p>
          <p>
            <img src="/img/icons/weather_clouds.png" />
            <Link to="/bank/"> { pluralize(this.props.coins, 'Coin') } </Link>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
