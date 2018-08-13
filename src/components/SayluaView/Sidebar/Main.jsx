import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { activeCompanionSelector } from 'reducers/selectors';
import Sprite from 'models/Sprite';
import { pluralize } from 'utils';

import './Sidebar.css';

const mapStateToProps = state => ({
  username: state.sayluaState.username,
  coins: state.sayluaState.coins,
  activeCompanion: activeCompanionSelector(state),
});
const mapDispatchToProps = {};

class Sidebar extends Component {
  render() {
    const companion = this.props.activeCompanion;
    const username = this.props.username;
    return (
      <div id="sidebar-container" className="sidebar-container">
        <div id="sidebar" className="sidebar">
          <div id="sidebar-navigation" className="sidebar-navigation">
            <button>
              <i className="fa fa-fw fa-user" title="You" />
            </button>
            <button>
              <i className="fa fa-fw fa-hourglass-half" title="Jobs" />
            </button>
          </div>
          <div id="user-info-section" className="sidebar-section">
            {companion &&
              <Link to={Sprite.url(companion)}>
                <img
                  className="petView"
                  alt={companion.name}
                  src={Sprite.imageUrl(companion)}
                />
              </Link>
            }
            <div className="sidebar-aligner">
              <p>You are <Link to="/user/">{username}</Link></p>
              {companion &&
                <p>
                  Your companion is <Link to={Sprite.url(companion)}>{companion.name}</Link>
                </p>
              }
              <div className="currency-container">
                <img src="/img/icons/weather_clouds.png" alt="coins" />
                <Link to="/bank/"> { pluralize(this.props.coins, 'Cloud Coin') } </Link>
              </div>
              <div className="currency-container">
                <img src="/img/icons/star_1.png" alt="premium coins" />
                <Link to="/bank/"> { pluralize(1, 'Star Shard') } </Link>
              </div>
            </div>
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
