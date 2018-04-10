import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Companion from 'models/Companion';
import { pluralize } from 'utils';

import './Sidebar.css';

const mapStateToProps = ({ coins, activeCompanion }) =>
  ({
    coins,
    activeCompanion,
  });
const mapDispatchToProps = {};

class Sidebar extends Component {
  render() {
    const companion = this.props.activeCompanion ? new Companion(this.props.activeCompanion) : null;
    return (
      <div id="sidebar-container" className="sidebar-container">
        <div id="sidebar" className="sidebar">
          <div id="user-info-section" className="sidebar-section">
            {companion &&
              <Link to={companion.url()}>
                <img
                  className="petView"
                  alt={companion.name}
                  src={companion.imageUrl()}
                />
              </Link>
            }
            <p>You are <Link to="/user/tiff/">Tiff</Link></p>
            {companion &&
              <p>
                Your companion is <Link to={companion.url()}>{companion.name}</Link>
              </p>
            }
            <p>
              <img src="/img/icons/weather_clouds.png" alt="coins" />
              <Link to="/bank/"> { pluralize(this.props.coins, 'Coin') } </Link>
            </p>
            <p>
              <img src="/img/icons/star_1.png" alt="premium coins" />
              <Link to="/bank/"> { pluralize(1, 'Star Shard') } </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
