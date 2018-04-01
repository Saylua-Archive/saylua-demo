import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setTheme } from '../../../store';

import './Header.css';

const mapStateToProps = ({ theme }) => ({ theme });

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (theme) => {
      dispatch(setTheme(theme));
    },
  };
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeChangeDisabled: false,
    };
  }

  setTheme(theme) {
    if (this.state.themeChangeDisabled) return;

    this.state.themeChangeDisabled = true;
    this.props.setTheme(theme);
    setTimeout(() => {
      this.state.themeChangeDisabled = false;
    }, 1000);
  }

  render() {
    return (
      <div id="header" className="header">
        <Link to="/" className="logo" title="Logo">
          <img id="logo-image" src="/img/logo.png" alt="Saylua" title="Saylua" />
        </Link>
        {
          this.props.theme === 'night' ?
            <button className="theme-switcher" onClick={this.setTheme.bind(this, 'day')}>
              <i className="far fa-fw fa-moon" aria-hidden="true" />
            </button>
          :
            <button className="theme-switcher" onClick={this.setTheme.bind(this, 'night')}>
              <i className="far fa-fw fa-sun" aria-hidden="true" />
            </button>
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
