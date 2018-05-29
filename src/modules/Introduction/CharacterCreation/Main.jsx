import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setTheme } from 'SayluaStore';
import Input from 'components/Input';
import RadioInput from 'components/RadioInput';
import Button from 'components/Button';

import './CharacterCreation.css';

const mapStateToProps = ({ theme }) => ({ theme });

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (theme) => {
      dispatch(setTheme(theme));
    },
  };
};

class CharacterCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideChoice: '',
    };
  }

  pickSide(side) {
    this.setState({
      sideChoice: side,
    });
  }

  render() {
    const companionColor = this.state.sideChoice === 'luaria' ? 'luarian' : 'saylian';
    return (
      <div className="character-creation-container">
        <div className="character-creation-header">
          <Link to="/">
            <img src="/img/logo.png" alt="Saylua " />
          </Link>
        </div>
        <div className="character-creation-inner">
          <h1>Create your character on Saylua</h1>
          <p>
            Great, it&#39;s time for you take your first steps towards becoming a
            denkeeper in the world of Saylua. Before you start your journey,
            we&#39;ll need to know a few things about you.
          </p>

          <p>
            What should we call you in this world?
            <small>
              Your name can include letters, numbers, and these symbols: +~._-
            </small>
          </p>
          <Input placeholder="Username" />

          <p>
            And the name of your den?
            <small>
              A den is a home you will share with your sprites.
            </small>
          </p>
          <Input placeholder="Den name" />

          <p>
            Which side would you like to live on?
            <small>
              Saylua is divided into a light and dark side.
              Don&#39;t worry, you will be able to change your side later.
            </small>
          </p>

          <div className="side-choice-container">
            <button
              className="side-choice"
              data-selected={this.state.sideChoice === 'sayleus'}
              onClick={this.pickSide.bind(this, 'sayleus')}
            >
              <img src="/img/backgrounds/sayleus.jpg" alt="Sayleus - The Light Side" />
              <h3>The Light Side: Sayleus</h3>
              The land of the endless sunlight. Leafy plants feast on the constant
              rays.
              <RadioInput checked={this.state.sideChoice === 'sayleus'} />
            </button>
            <button
              className="side-choice"
              data-selected={this.state.sideChoice === 'luaria'}
              onClick={this.pickSide.bind(this, 'luaria')}
            >
              <img src="/img/backgrounds/luaria.jpg" alt="Luaria - The Dark Side" />
              <h3>The Dark Side: Luaria</h3>
              A dark place. Unusual creatures find their home in the shadows here.
              <RadioInput checked={this.state.sideChoice === 'luaria'} />
            </button>
          </div>

          <p>
            Which companion would you like to start with?
            <small>
              You will be able to befriend many companions in the world of
              Saylua, but this companion will be your first.
            </small>
          </p>

          <label htmlFor="pickArko">
            <img src={`/img/sprites/arko/${companionColor}.png`} alt="The Arko" />
          </label>
          <input id="pickArko" type="radio" name="starter" value="arko" />

          <label htmlFor="pickChirling">
            <img src={`/img/sprites/chirling/${companionColor}.png`} alt="The Chirling" />
          </label>
          <input id="pickChirling" type="radio" name="starter" value="chirling" />

          <label htmlFor="pickNibian">
            <img src={`/img/sprites/nibian/${companionColor}.png`} alt="The Nibian" />
          </label>
          <input id="pickNibian" type="radio" name="starter" value="nibian" />

          <p>
            And finally, what will you call your companion?
          </p>
          <Input placeholder="Companion name" />
          <br /><Button>Start your adventure!</Button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CharacterCreation);
