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
      <div id="sidebar" className="sidebar">
        <div id="user-info-section" className="sidebar-section">
          {companion &&
            <div>
              <Link to={companion.url()}>
                <img
                  className="petView"
                  alt={companion.name}
                  src={companion.imageUrl()}
                />
              </Link>
              <StatBar
                label="Health"
                color="health-color"
                value={companion.health}
                max={companion.maxHealth}
              />
              <StatBar
                label="Stamina"
                color="stamina-color"
                value={companion.stamina}
                max={companion.maxStamina}
              />
              <StatBar
                label="Focus"
                color="focus-color"
                value={companion.focus}
                max={companion.maxFocus}
              />
            </div>
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
    );
  }
}

function StatBar(args) {
  const width = `${(args.value / args.max) * 100}%`;
  return (
    <div className="bar-back">
      <div
        className={`bar-main bar-${args.color}`}
        style={{
          width,
        }}
      />
      <div>{args.label}</div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
