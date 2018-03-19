"use strict";

import React, { Component } from 'react';
import {encounters, randomEncounters, Companion} from './encounters';
import { chooseWeighted, check, randInt } from 'utils';
import './Adventure.css';
import SayluaView from '../SayluaView';
import { connect } from 'react-redux';
import { adopt, accompany, addCoins, setEncounter } from '../../store';

const mapStateToProps = ({ coins, activeCompanion, companions, encounter }) =>
    ({ coins, activeCompanion, companions, encounter });

const mapDispatchToProps = (dispatch) => {
  return {
    setEncounter: (encounter) => {
      dispatch(setEncounter(encounter))
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
    for (let i = 0; i < this.props.encounter.choices.length; i++) {
      choiceButtons.push(<ChoiceButton
        key={this.props.encounter.choices[i].choiceText}
        desc={this.props.encounter.choices[i].choiceText}
        onClick={() => {
          let outcome = chooseWeighted(this.props.encounter.choices[i].outcomes);
          outcome.result();
          this.setState({resultText: outcome.generateResultText(this.props)});
          this.props.setEncounter(chooseWeighted(randomEncounters));
        }}
      />);
    }
    let mainText = this.props.encounter.generateMainText(this.props);
    let resultText = this.state.resultText;
    return(
      <SayluaView>
        <div className="adventure">
          <h2>Gardenia Plains</h2>
          <p className="adventureText" id="result-desc">{resultText}</p>
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
