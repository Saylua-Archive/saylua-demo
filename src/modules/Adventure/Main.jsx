"use strict";

import React, { Component } from 'react';
import {encounters, randomEncounters, Companion} from './encounters';
import {chooseWeighted, check, randInt} from 'utils';
import './Adventure.css';
import SayluaView from '../SayluaView';
import { connect } from 'react-redux';
import { adopt, accompany, addCoins } from '../../store';

const mapStateToProps = ({ coins, activeCompanion, companions }) =>
    ({ coins, activeCompanion, companions });

const mapDispatchToProps = (dispatch) => {
  return {
    adopt: (companion) => {
      dispatch(adopt(companion));
    },
    accompany: (companion) => {
      dispatch(accompany(companion));
    },
    addCoins: (count) => {
      dispatch(addCoins(count));
    },
  }
}

class Adventure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encounter: encounters.start,
      randomEncounters: randomEncounters,
    };
  }

  render() {
    let choiceButtons = [];
    if (this.state.encounter.requirementCheck && this.state.encounter.requirementCheck(this.state)) {
      this.setState({encounter: chooseWeighted(randomEncounters)});
    }
    for (let i = 0; i < this.state.encounter.choices.length; i++) {
      choiceButtons.push(<ChoiceButton
        key={this.state.encounter.choices[i].choiceText}
        desc={this.state.encounter.choices[i].choiceText}
        onClick={() => {
          let outcome = chooseWeighted(this.state.encounter.choices[i].outcomes);
          let outcomeFunction = outcome.result;
          this.props.addCoins(10); // TODO: Replace this with proper outcome function
          this.setState({resultText: outcome.generateResultText(this.state)});
        }}
      />);
    }
    if (this.state.steps <= 0 && this.state.encounter != encounters.end) {
      this.setState({encounter: encounters.end});
    }
    let mainText = this.state.encounter.generateMainText(this.state);
    let resultText = this.state.resultText;
    return(
      <SayluaView>
        <div className="adventure">
          <h2>The Peaceful Plains</h2>
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
