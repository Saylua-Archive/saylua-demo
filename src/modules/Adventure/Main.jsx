import React, { Component } from 'react';
import {encounters, randomEncounters, Companion} from './encounters/Main.js';
import { chooseWeighted, check, randInt } from 'utils';
import './Adventure.css';
import SayluaView from '../SayluaView';
import { connect } from 'react-redux';
import { adopt, accompany, addCoins, setEncounter } from '../../store';

const mapStateToProps = ({ coins, activeCompanion, companions, encounterSeed, encounterId }) =>
    ({ coins, activeCompanion, companions, encounterSeed, encounterId });

const mapDispatchToProps = (dispatch) => {
  return {
    setEncounter: (encounter) => {
      encounter.seed = Math.floor(Math.random() * 10000000000);
      dispatch(setEncounter(encounter));
    }
  }
}

class Adventure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomEncounters: randomEncounters,
    };
  }

  render() {
    let choiceButtons = [];
    let encounterImgs = [];
    let encounter = encounters[this.props.encounterId];
    let seed = this.props.encounterSeed;
    encounter.seed = seed;
    encounter.state = this.props;
    let choices = encounter.choices;
    let encounterImg = encounter.img;
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
      encounterImgs.push(<img src={encounter.img}
      />);
    } else if (Array.isArray(encounter.img)) {
      for (let i = 0; i < encounter.img.length; i++) {
        encounterImgs.push(<img src={encounter.img[i]}
        />);
      }
    }
    let mainText = encounter.mainText;
    let resultText = this.state.resultText;
    return(
      <SayluaView>
        <div className="adventure">
          <h2>Gardenia Plains</h2>
          <p className="adventureText" id="result-desc">{resultText}</p>
          <div className="imageArea">{encounterImgs}</div>
          <p className="adventureText" id="scene-desc">{mainText}</p>
          {choiceButtons}
        </div>
      </SayluaView>
    )
  }
}

function ChoiceButton(props) {
  return (
    <div className="choice" onClick={props.onClick}>
      {props.desc}
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adventure);
