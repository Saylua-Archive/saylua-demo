import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {encounters, randomEncounters} from './encounters'
import {chooseWeighted, check, randInt} from './encounterFuncs'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      energy: 100,
      coins: 0,
      joy: 15,
      steps: 10,
      companion: new Companion("Tori", randInt(10), randInt(10), randInt(10)),
      encounter: encounters.start,
    };
  }

  render() {
    let choiceButtons = [];
    for (let i = 0; i < this.state.encounter.choices.length; i++) {
      choiceButtons.push(<ChoiceButton
        key={this.state.encounter.choices[i].choiceText}
        desc={this.state.encounter.choices[i].choiceText}
        onClick={() => {
          this.setState(chooseWeighted(this.state.encounter.choices[i].outcomes)(this.state))
        }}
        parentState={this.state}
      />);
    }
    if (this.state.steps <= 0 && this.state.encounter != this.encounters.end) {
      this.setState({encounter: this.encounters.end});
    }
    return(
      <div>
      <h2>The Peaceful Plains</h2>
      <StatBox
        stats={[
        ["Energy", this.state.energy],
        ["Coins", this.state.coins],
        ["Joy", this.state.joy],
        ["Steps", this.state.steps],
      ]}/>
      <img src="pets/chirling/common.png"/>
      <p className="mainText" id="scene-desc">{this.state.encounter.mainText}</p>
      {choiceButtons}
      </div>
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

function StatBox(props) {
  let dStats = [];
  for (let i = 0; i < props.stats.length; i++) {
    dStats.push(<div className='stat' key={props.stats[i][0]}>{props.stats[i][0] + ": " + props.stats[i][1]}</div>);
  }
  return (
    <div className="statBox">
    {dStats}
    </div>
  )
}

function Encounter(mainText, choices) {
  this.mainText = mainText;
  this.choices = choices;
}

function Choice(choiceText, outcomes) {
  this.choiceText = choiceText;
  this.outcomes = outcomes;
}

function Companion(name, str, spd, cha) {
  this.name = name;
  this.str = str;
  this.spd = spd;
  this.cha = cha;
}

export default App;
