import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { adopt, setUsername, setSide } from 'SayluaStore';
import { store } from 'index';
import Sprite from 'models/Sprite';
import SpriteSpecies from 'models/SpriteSpecies';
import SpriteCoat from 'models/SpriteCoat';
import SideHelper from 'models/Side';
import CharacterCreationForm from './CharacterCreationForm';
import './CharacterCreation.css';


export default class CharacterCreation extends Component {
  handleSubmit(values) {
    // TODO(tiff): Refactor sprite data to be cleaner and more consistent.
    const starter = SpriteSpecies.fromId(values.starterSpecies);
    const side = SideHelper.getById(values.side);
    const coat = SpriteCoat.fromSpeciesAndVariant(starter.canonName, side.adjective);

    // TODO(tiff): Figure out how we want to batch actions.
    store.dispatch(adopt(Sprite.create({
      name: values.companionName,
      speciesId: values.starterSpecies,
      coatId: coat.id,
    })));
    store.dispatch(setSide(values.side));
    store.dispatch(setUsername(values.username));

    // TODO(tiff): Replace this with a nicer onboarding experience.
    window.location = '/';
  }

  render() {
    return (
      <div className="character-creation-container">
        <div className="character-creation-header">
          <Link to="/">
            <img src="/img/logo.png" alt="Saylua" />
          </Link>
        </div>
        <div className="character-creation-inner">
          <h1>Create your character on Saylua</h1>
          <p>
            Great, it&#39;s time for you take your first steps towards becoming a
            denkeeper in the world of Saylua. Before you start your journey,
            we&#39;ll need to know a few things about you.
          </p>

          <CharacterCreationForm
            onSubmit={this.handleSubmit.bind(this)}
          />
        </div>
      </div>
    );
  }
}
