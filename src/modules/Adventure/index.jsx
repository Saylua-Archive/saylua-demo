import React, { Component } from 'react';
import { chooseWeighted, randomSeed } from 'utils';
import { connect } from 'react-redux';

import SayluaView from 'components/SayluaView';
import { setEncounter, setArea, setSteps, setDeck, updateCondition, setEncounterState } from 'reducers/sayluaReducer';
import { companionsSelector, activeCompanionSelector } from 'reducers/selectors';
import marked from 'marked';

import { ENCOUNTERS, randomEncounters } from './encounters/encounters';
import { cardsList } from './encounters/cards';
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
  deck: state.sayluaState.deck,
  encounterState: state.sayluaState.encounterState,
  inventory: state.sayluaState.inventory,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setEncounter: (newEncounter, seed) => {
      const newSeed = seed || randomSeed();
      dispatch(setEncounter(newEncounter, newSeed));
    },
    setEncounterState: (encounterState) => {
      dispatch(setEncounterState(encounterState));
    },
    setArea: (area) => {
      area = area || Areas.Gardenia;
      dispatch(setArea(area));
    },
    setSteps: (steps) => {
      dispatch(setSteps(steps));
    },
    setDeck: (deck) => {
      dispatch(setDeck(deck));
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
      inventory: this.props.inventory,
      opponent: this.props.encounterState && this.props.encounterState.opponent,
      deck: this.props.deck,
    };
    if (!player.activeCompanion) {
      return (
        <SayluaView>
          <EventView
            area={Areas.Gardenia}
            rawMarkup={this.rawMarkup}
            mainText="You need a companion to adventure!"
            encounterImgs={[]}
          />
        </SayluaView>
      );
    }
    const mainText = Encounter.getText(encounter, this.props.encounterSeed, player);
    const images = Encounter.getImages(encounter, this.props.encounterSeed, player) || [];
    const choices = Encounter.getChoices(encounter, this.props.encounterSeed, player);
    const availableChoices = choices && choices.filter(choice =>
      Choice.checkRequirements(choice, encounter, this.props.encounterSeed, player));
    const choiceButtons = availableChoices ? availableChoices.map((choice, i) => (<ChoiceButton
      index={i + 1}
      desc={Choice.getText(choice, this.props.encounterSeed, player)}
      key={Choice.getText(choice, this.props.encounterSeed, player) + Math.random()}
      onClick={() => {
        if (!choice.repeat) {
          this.props.updateCondition({ stamina: -2, health: 1 });
          this.props.setSteps(this.props.steps - 1);
        }
        Choice.choose(choice, encounter, this.props.encounterSeed, player);
        if (this.props.deck.length < 3) {
          this.props.setDeck(this.props.deck.concat([chooseWeighted(cardsList)]));
        }
        if (!choice.repeat) {
          this.props.setEncounterState({ opponent: null });
          this.props.setEncounter(chooseWeighted(randomEncounters));
        }
        if (this.props.activeCompanion.health < 0) {
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
          opponent={Encounter.getOpponent(encounter, this.props.encounterSeed, player)}
        />
      </SayluaView>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Adventure);
