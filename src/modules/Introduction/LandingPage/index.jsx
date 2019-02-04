import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page-container">
        <div className="landing-page-inner">
          <img src="/img/logo-demo.png" alt="Saylua Demo" />
          <div className="demo-warning">
            This is a demo version of Saylua. Progress in this demo
            will not transfer to the final game.
          </div>
          <p>
            Saylua is an in-development browser game about finding your place in a
            world filled with charming creatures to befriend.
          </p>
          <p>
            The final release version of Saylua will be a persistent online
            game with a community of players. This demo version presents our main
            game mechanics in a single player context.
          </p>
          <Link to="/register">
            <button>
              Try out Saylua now!
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
