"use strict";

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {encounters, randomEncounters, Companion} from './encounters'
import {chooseWeighted, check, randInt} from './utils'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      energy: 100,
      coins: 0,
      joy: 15,
      steps: 10,
      activeCompanion: new Companion("Tori", "chirling", randInt(10), randInt(10), randInt(10)),
      companions: [],
      encounter: encounters.start,
      randomEncounters: randomEncounters,
    };
  }

  render() {
    let choiceButtons = [];
    let miniPets = [];
    for (let i = 0; i < this.state.companions.length; i++) {
      miniPets.push(<MiniPet
        companion={this.state.companions[i]}
        onClick={
          () => {this.setState({activeCompanion: this.state.companions[i]})}
        }
      />);
    }
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
          this.setState(outcomeFunction(this.state));
          this.setState({resultText: outcome.text});
        }}
      />);
    }
    if (this.state.steps <= 0 && this.state.encounter != encounters.end) {
      this.setState({encounter: encounters.end});
    }
    let mainText = this.state.encounter.mainText;
    if (typeof mainText === 'function') {
      mainText = mainText(this.state);
    }
    let resultText = this.state.resultText;
    if (typeof resultText === 'function') {
      resultText = resultText(this.state);
    }
    return(
      <div className="adventure">
      <div className="testLair">{miniPets}</div>
      <h2>The Peaceful Plains</h2>
      <StatBox
        stats={[
        ["Energy", this.state.energy],
        ["Coins", this.state.coins],
        ["Joy", this.state.joy],
        ["Steps", this.state.steps],
      ]}/>
      <img className="mainImage" src={"pets/" + this.state.activeCompanion.species + "/common.png"}/>
      <p className="adventureText" id="result-desc">{resultText}</p>
      <p className="adventureText" id="scene-desc">{mainText}</p>
      {choiceButtons}
      </div>
    )
  }
}

function MiniPet(props) {
  return (
    <img className="miniPet" src={"pets/" + props.companion.species + "/common.png"} onClick={props.onClick}/>
  );
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

export default App;
