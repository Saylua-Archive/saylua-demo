import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setTheme } from 'store';

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
    }, 700);
  }

  render() {
    let nextIcon = 'far fa-fw fa-moon';
    let nextTheme = 'luarian';

    if (this.props.theme === 'luarian') {
      nextIcon = 'fa fa-fw fa-adjust';
      nextTheme = 'dawnish';
    } else if (this.props.theme === 'dawnish') {
      nextIcon = 'far fa-fw fa-sun';
      nextTheme = 'saylian';
    }

    return (
      <div id="header" className="header">
        <Link to="/" className="logo" title="Logo">
          <img id="logo-image" src="/img/logo.png" alt="Saylua" title="Saylua" />
        </Link>
        <button className="theme-switcher" onClick={this.setTheme.bind(this, nextTheme)}>
          <i className={nextIcon} aria-hidden="true" />
        </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
