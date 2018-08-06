import React, { Component } from 'react';
import { chooseWeighted } from 'utils';
import { connect } from 'react-redux';
import { encounters, randomEncounters } from './encounters/Main';
import Areas from './Areas';
import ChoiceButton from './ChoiceButton';
import EventView from './EventView';
import './Adventure.css';
import SayluaView from 'components/SayluaView';
import { setEncounter, setArea, setSteps, updateCondition } from 'SayluaStore';
import marked from 'marked';

const mapStateToProps = ({
  sayluaState: {
    coins, activeCompanion, companions, encounterSeed, encounterId, area, steps, encounterState,
  },
}) =>
  ({
    coins, activeCompanion, companions, encounterSeed, encounterId, area, steps, encounterState,
  });

const mapDispatchToProps = (dispatch) => {
  return {
    setEncounter: (encounter, seed) => {
      encounter.seed = seed || Math.floor(Math.random() * 10000000000);
      dispatch(setEncounter(encounter));
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
    const choiceButtons = [];
    const encounterImgs = [];
    let encounter = this.props.steps <= 0 ? encounters.finish : encounters[this.props.encounterId];
    encounter = encounter || chooseWeighted(randomEncounters);
    if (this.props.activeCompanion && (
      this.props.activeCompanion.health < 0
    )) {
      encounter = encounters.defeat;
    }
    const seed = this.props.encounterSeed;
    encounter.seed = seed;
    encounter.state = this.props;
    const area = this.props.area || Areas.Gardenia;
    if (!this.props.area) {
      this.props.setArea(area);
    } else if (this.props.steps > 200 && this.props.area.title !== Areas.Gardenia.title) {
      this.props.setArea(Areas.Gardenia);
    } else if (this.props.steps <= 200 && this.props.area.title === Areas.Gardenia.title) {
      this.props.setArea(Areas.Wanderlin);
    } else if (this.props.steps <= 100 && this.props.area.title === Areas.Wanderlin.title) {
      this.props.setArea(Areas.Korvinwood);
    }
    const choices = encounter.choices;
    for (let i = 0; i < choices.length; i++) {
      const outcomeFunc = typeof (choices[i].outcome.func) === "function" ? choices[i].outcome.func : () => {};
      const index = String(i + 1);
      const interact = () => {
        outcomeFunc();
        if (choices[i].outcome.nextID) {
          this.props.setEncounter(encounters[choices[i].outcome.nextID], seed);
        } else {
          this.props.setEncounter(chooseWeighted(randomEncounters));
          this.props.updateCondition({ health: 1 }); // For passive changes
          this.props.setSteps(this.props.steps - 1);
        }
      };
      choiceButtons.push(<ChoiceButton
        key={`${index}. ${choices[i].text}`}
        desc={`${index}. ${choices[i].text}`}
        onClick={interact}
        index={index}
      />);
    }
    let imgKeys = encounter.img;
    if (imgKeys && !Array.isArray(imgKeys)) {
      imgKeys = [imgKeys];
    }
    imgKeys = imgKeys || [];
    const imgURLs = imgKeys.map(x => x.url);
    const mainText = encounter.mainText;

    return (
      <SayluaView>
        <EventView
          area={area}
          encounterImgs={imgURLs}
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
