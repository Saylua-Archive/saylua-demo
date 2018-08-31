import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sprite from 'models/Sprite';
import { accompany, setSteps } from 'reducers/sayluaReducer';
import { resetAdventureFunc } from 'modules/Adventure/encounters/encounterFuncs';
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
    const denPets = this.props.companions.map(companion => (<DenPet
      companion={companion}
      onClick={() => {
        if (this.props.steps !== 300 &&
           window.confirm("Accompanying a new companion will end your current adventure. Continue?")
         ) {
           this.props.accompany(companion.id);
           resetAdventureFunc(companion)();
         } else if (this.props.steps === 300) {
           this.props.accompany(companion.id);
           resetAdventureFunc(companion)();
         }
      }}
    />));
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
