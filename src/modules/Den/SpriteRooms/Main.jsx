import React, { Component } from 'react';
import { connect } from 'react-redux';

import Companion from 'models/Companion';
import { accompany, setSteps } from 'SayluaStore';
import { resetAdventureFunc } from 'modules/Adventure/encounterFuncs';
import SayluaView from 'components/SayluaView';

import './SpriteRooms.css';

const mapStateToProps = ({ companions, steps }) => ({ companions, steps });

const mapDispatchToProps = (dispatch) => {
  return {
    accompany: (companion) => {
      dispatch(accompany(companion));
    },
    setSteps: (count) => {
      dispatch(setSteps(count));
    },
  };
};

class SpriteRooms extends Component {
  render() {
    const denPets = [];
    for (let i = 0; i < this.props.companions.length; i++) {
      denPets.push(<DenPet
        companion={this.props.companions[i]}
        onClick={() => {
          if (this.props.steps !== 300 &&
            window.confirm("Warning! Accompanying a new companion will end your current adventure. Continue?")
          ) {
            this.props.accompany(this.props.companions[i]);
            resetAdventureFunc(this.props.companions[i])();
          }
          }
        }
      />);
    }
    return (
      <SayluaView>
        <h2>Your Den</h2>
        <div className="den-container">
          {denPets}
        </div>
      </SayluaView>
    );
  }
}

function DenPet(props) {
  const companion = new Companion(props.companion);
  return (
    <div
      onClick={props.onClick}
      role="button"
      tabIndex={0}
      className="den-pet"
    >
      <img
        alt={companion.name}
        src={companion.imageUrl()}
      />
      <div>{companion.fullName()}</div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpriteRooms);
