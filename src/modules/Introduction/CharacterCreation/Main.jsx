import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setTheme } from 'SayluaStore';
import SideHelper, { SIDES } from 'models/Side';

import CharacterCreationForm from './CharacterCreationForm';
import './CharacterCreation.css';

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
      sideChoice: SIDES.SAYLEUS,
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  pickSide(side) {
    this.setState({
      sideChoice: side,
    });
    const theme = SideHelper.getById(side).adjective;
    this.props.setTheme(theme);
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
            sideChoice={this.state.sideChoice}
            handleSideChoice={this.pickSide.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(CharacterCreation);
