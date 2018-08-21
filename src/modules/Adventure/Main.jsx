import React, { Component } from 'react';
import { chooseWeighted } from 'utils';
import { connect } from 'react-redux';

import SayluaView from 'components/SayluaView';
import { setEncounter, setArea, setSteps, updateCondition } from 'reducers/sayluaReducer';
import { companionsSelector, activeCompanionSelector } from 'reducers/selectors';
import marked from 'marked';

import { ENCOUNTERS, randomEncounters } from './encounters/encounters';
import { Encounter, Choice } from './encounters/Models';
import Areas from './Areas';
import ChoiceButton from './ChoiceButton';
import EventView from './EventView';
import './Adventure.css';

const mapStateToProps = state => ({
  username: state.sayluaState.username,
  coins: state.sayluaState.coins,
  activeCompanion: activeCompanionSelector(state),
  companions: companionsSelector(state),
  encounterSeed: state.sayluaState.encounterSeed,
  encounterId: state.sayluaState.encounterId,
  area: state.sayluaState.area,
  steps: state.sayluaState.steps,
  encounterState: state.sayluaState.encounterState,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setEncounter: (newEncounter, seed) => {
      const newSeed = seed || Math.floor(Math.random() * 10000000000);
      dispatch(setEncounter(newEncounter, newSeed));
    },
    setArea: (area) => {
      area = area || Areas.Gardenia;
      dispatch(setArea(area));
    },
    setSteps: (steps) => {
      dispatch(setSteps(steps));
    },
    updateCondition: (condition) => {
      dispatch(updateCondition(condition));
    },
  };
};

class Adventure extends Component {
  rawMarkup(text) {
    const rawMarkup = marked(text, { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    const encounter = Encounter.byId(this.props.encounterId);
    const player = {
      username: this.props.username,
      activeCompanion: this.props.activeCompanion,
    };
    const mainText = Encounter.getText(encounter, this.props.encounterSeed, player);
    const images = encounter.images || [];
    const choiceButtons = encounter.choices ? encounter.choices.map((choice, i) => (<ChoiceButton
      index={i + 1}
      desc={Choice.getText(choice, this.props.encounterSeed, player)}
      key={Choice.getText(choice, this.props.encounterSeed, player)}
      onClick={() => {
        Choice.choose(choice, encounter, this.props.encounterSeed, player);
        this.props.setEncounter(chooseWeighted(randomEncounters));
        this.props.updateCondition({ stamina: -2, health: 2 });
        if (this.props.activeCompanion.health < 0 || this.props.activeCompanion.stamnia < 0) {
          this.props.setEncounter(ENCOUNTERS.END);
        }
      }}
    />)) : [];
    return (
      <SayluaView>
        <EventView
          area={Areas.Gardenia}
          encounterImgs={images}
          mainText={mainText}
          choiceButtons={choiceButtons}
          rawMarkup={this.rawMarkup}
          activeCompanion={this.props.activeCompanion}
          opponent={encounter.opponent}
        />
      </SayluaView>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Adventure);
