import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setSidebarTab } from 'reducers/sayluaReducer';

import SpriteJobView from './SpriteJobView';
import UserInfoView from './UserInfoView';
import './Sidebar.css';

const mapStateToProps = state => ({
  coins: state.sayluaState.coins,
  shards: state.sayluaState.shards,
  sidebarTabIndex: state.sayluaState.sidebarTabIndex,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setSidebarTab: sidebarTabIndex => dispatch(setSidebarTab(sidebarTabIndex)),
  };
};

class Sidebar extends Component {
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
            <button onClick={() => this.props.setSidebarTab(0)}>
              <i className="fa fa-fw fa-user" title="You" />
            </button>
            <button onClick={() => this.props.setSidebarTab(1)}>
              <i className="fa fa-fw fa-hourglass-half" title="Jobs" />
            </button>
          </div>
          { this.props.sidebarTabIndex === 0 && <UserInfoView /> }
          { this.props.sidebarTabIndex === 1 && <SpriteJobView /> }
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
