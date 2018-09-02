import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import SpriteJobView from './SpriteJobView';
import UserInfoView from './UserInfoView';
import './Sidebar.css';

const mapStateToProps = state => ({
  coins: state.sayluaState.coins,
  shards: state.sayluaState.shards,
});
const mapDispatchToProps = {};

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  render() {
    return (
      <div id="sidebar-container" className="sidebar-container">
        <div id="sidebar" className="sidebar">
          <div>
            <div className="currency-container">
              <img src="/img/icons/weather_clouds.png" alt="Cloud Coins" />
              <Link to="/bank/"> { this.props.coins } CC </Link>
            </div>
            <div className="currency-container">
              <img src="/img/icons/star_1.png" alt="Star Shards" />
              <Link to="/bank/"> { this.props.shards } SS </Link>
            </div>
          </div>
          <div id="sidebar-navigation" className="sidebar-navigation">
            <button onClick={() => this.setState({ activeTab: 0 })}>
              <i className="fa fa-fw fa-user" title="You" />
            </button>
            <button onClick={() => this.setState({ activeTab: 1 })}>
              <i className="fa fa-fw fa-hourglass-half" title="Jobs" />
            </button>
          </div>
          { this.state.activeTab === 0 && <UserInfoView /> }
          { this.state.activeTab === 1 && <SpriteJobView /> }
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
