import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Footer.css';

import { clearState, setTheme } from '../../../store';

import Clock from './Clock';

const mapStateToProps = ({ theme }) => ({ theme });

const mapDispatchToProps = (dispatch) => {
  return {
    clearState: () => {
      dispatch(clearState());
    },
    setTheme: (theme) => {
      dispatch(setTheme(theme));
    },
  };
};

class Footer extends Component {
  render() {
    const separator = ' \u2022 ';
    return (
      <footer id="footer">
        <div className="sidebar-filler" />
        <div className="footer-content">
          <p>
            <span id="social-icons">
              <a href="https://www.facebook.com/officialsaylua/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-fw fa-facebook" aria-hidden="true" />
              </a>
              { separator }
              <a href="https://twitter.com/officialsaylua" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-fw fa-twitter" aria-hidden="true" />
              </a>
              { separator }
              <a href="http://saylua.tumblr.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-fw fa-tumblr" aria-hidden="true" />
              </a>
              { separator }
              <a href="https://www.reddit.com/r/saylua" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-fw fa-reddit" aria-hidden="true" />
              </a>
              { separator }
              <a href="https://discord.gg/CPet6aq" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-fw fa-discord" aria-hidden="true" />
              </a>
            </span>
          </p>
          <Clock />
          { separator }
          <a>
            <i className="far fa-fw fa-sun" aria-hidden="true" onClick={() => this.props.setTheme('day')} />
          </a>
          { separator }
          <a>
            <i className="far fa-fw fa-moon" aria-hidden="true" onClick={() => this.props.setTheme('night')} />
          </a>
          <p>
            &copy; 2018 <Link to="/">Saylua</Link>
          </p>
          <button
            className="Button"
            onClick={
            () => {
              const clearSure = window.confirm("Are you sure you want to clear the state? This will reset Saylua and delete your progress!");
              if (clearSure) {
                this.props.clearState();
              }
            }
            }
          >
            Clear State
          </button>
        </div>
      </footer>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
