import React, { Component } from 'react';
import { chooseWeighted } from 'utils';
import { connect } from 'react-redux';
import { encounters, randomEncounters } from './encounters/Main';
import './Adventure.css';
import SayluaView from '../SayluaView';
import { setEncounter } from '../../store';

const mapStateToProps = ({
  coins, activeCompanion, companions, encounterSeed, encounterId,
}) =>
  ({
    coins, activeCompanion, companions, encounterSeed, encounterId,
  });

const mapDispatchToProps = (dispatch) => {
  return {
    setEncounter: (encounter) => {
      encounter.seed = Math.floor(Math.random() * 10000000000);
      dispatch(setEncounter(encounter));
    },
  };
};

class Adventure extends Component {
  render() {
    const choiceButtons = [];
    const encounterImgs = [];
    const encounter = encounters[this.props.encounterId];
    const seed = this.props.encounterSeed;
    encounter.seed = seed;
    encounter.state = this.props;
    const choices = encounter.choices;
    for (let i = 0; i < choices.length; i++) {
      choiceButtons.push(<ChoiceButton
        key={choices[i].text}
        desc={choices[i].text}
        onClick={() => {
          choices[i].outcome();
          this.props.setEncounter(chooseWeighted(randomEncounters));
        }}
      />);
    }
    if (typeof encounter.img === 'string') {
      encounterImgs.push(<img
        src={encounter.img}
        alt="Encounter"
      />);
    } else if (Array.isArray(encounter.img)) {
      for (let i = 0; i < encounter.img.length; i++) {
        encounterImgs.push(<img
          src={encounter.img[i]}
          alt="Encounter"
        />);
      }
    }
    const mainText = encounter.mainText;
    return (
      <SayluaView>
        <div className="adventure">
          <h2>Gardenia Plains</h2>
          <div className="imageArea">{encounterImgs}</div>
          <p className="adventureText" id="scene-desc">{mainText}</p>
          {choiceButtons}
        </div>
      </SayluaView>
    );
  }
}

function ChoiceButton(props) {
  return (
    <div
      className="choice"
      role="button"
      tabIndex={0}
      onClick={props.onClick}
    >
      {props.desc}
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Adventure);
