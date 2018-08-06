import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sprite from 'models/Sprite';
import { accompany, setSteps } from 'reducers/sayluaReducer';
import { resetAdventureFunc } from '../Adventure/encounterFuncs';
import SayluaView from 'components/SayluaView';
import { companionsSelector } from 'reducers/selectors';

import './Den.css';

const mapStateToProps = state => ({
  companions: companionsSelector(state),
  steps: state.sayluaState.steps,
});

const mapDispatchToProps = (dispatch) => {
  return {
    accompany: (companionId) => {
      dispatch(accompany(companionId));
    },
    setSteps: (count) => {
      dispatch(setSteps(count));
    },
  };
};

class Den extends Component {
  render() {
    const denPets = [];
    for (let i = 0; i < this.props.companions.length; i++) {
      denPets.push(<DenPet
        companion={this.props.companions[i]}
        onClick={() => {
          if (this.props.steps !== 300 &&
            window.confirm("Accompanying a new companion will end your current adventure. Continue?")
          ) {
            this.props.accompany(this.props.companions[i].id);
            resetAdventureFunc(this.props.companions[i])();
          } else if (this.props.steps === 300) {
            this.props.accompany(this.props.companions[i].id);
            resetAdventureFunc(this.props.companions[i])();
          }
        }}
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
  const companion = props.companion;
  return (
    <div
      key={`${Sprite.fullName(companion)}`}
      onClick={props.onClick}
      role="button"
      tabIndex={0}
      className="den-pet"
    >
      <img
        alt={companion.name}
        src={Sprite.imageUrl(companion)}
      />
      <div>{Sprite.fullName(companion)}</div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Den);
