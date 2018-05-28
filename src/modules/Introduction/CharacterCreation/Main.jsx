import React, { Component } from 'react';

import './CharacterCreation.css';

export default class CharacterCreation extends Component {
  render() {
    return (
      <div className="character-creation-container">
        <div className="character-creation-inner">
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
          <input placeholder="Username" />

          <p>
            And the name of your den?
            <small>
              A den is a home you will share with your sprites.
            </small>
          </p>
          <input placeholder="Den name" />

          <p>
            Which side would you like to live on?
            <small>
              Saylua is divided into a light and dark side.
              Don&#39;t worry, you will be able to change your side later.
            </small>
          </p>

          <label htmlFor="pickSayleus">
            <img src="/img/backgrounds/sayleus.jpg" alt="Sayleus - The Light Side" />
          </label>
          <input id="pickSayleus" type="radio" name="side" value="sayleus" />

          <label htmlFor="pickLuaria">
            <img src="/img/backgrounds/luaria.jpg" alt="Luaria - The Dark Side" />
          </label>
          <input id="pickLuaria" type="radio" name="side" value="luaria" />

          <p>
            Which companion would you like to start with?
            <small>
              You will be able to befriend many companions in the world of
              Saylua, but this companion will be your first.
            </small>
          </p>

          <label htmlFor="pickArko">
            <img src="/img/sprites/arko/luarian.png" alt="The Arko" />
          </label>
          <input id="pickArko" type="radio" name="starter" value="arko" />

          <label htmlFor="pickChirling">
            <img src="/img/sprites/chirling/luarian.png" alt="The Chirling" />
          </label>
          <input id="pickChirling" type="radio" name="starter" value="chirling" />

          <label htmlFor="pickNibian">
            <img src="/img/sprites/nibian/luarian.png" alt="The Nibian" />
          </label>
          <input id="pickNibian" type="radio" name="starter" value="nibian" />

          <p>
            And finally, what will you call your companion?
          </p>
          <input placeholder="Companion name" />
        </div>
      </div>
    );
  }
}
