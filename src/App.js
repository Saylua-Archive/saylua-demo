import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.encounters = {};
    this.randomEncounters = [];
    let newChoices = [];
    newChoices.push(new Choice("I'm Ready!", [this.continue]));
    newChoices.push(new Choice("Let's Go!", [this.continue]));
    this.encounters.start = new Encounter("Let's get started!", newChoices);
    this.state = {
      energy: 100,
      coins: 0,
      joy: 15,
      steps: 10,
      companion:new Companion("Tori", randInt(10), randInt(10), randInt(10)),
      encounter: this.encounters.start,
    };

    this.encounters.end = new Encounter("You have completed your journey!",
      [
        new Choice("Thanks for playing!", [
          () => {
          }])
      ]);

    this.encounters.singFun = new Encounter(this.state.companion.name + " sings along and has a wonderful time.",
      [
        new Choice("Tweet tweet~", [
          () => {
            this.setState(addJoy(this.state, 5));
            this.continue();
          }])
      ]);
    this.randomEncounters.push(this.encounters.singFun);

    this.encounters.singTip = new Encounter("The chirlings sing for a while. The other chirling holds out a hat and you toss a few coins in.",
      [
        new Choice("Support for the arts!", [
          () => {
            this.setState(addJoy(this.state, 3));
            this.setState(addCoins(this.state, -10));
            this.continue();
          }])
      ]);
    this.randomEncounters.push(this.encounters.singTip);

    this.encounters.singFail = new Encounter(this.state.companion.name + " tries to sing but loses their voice!",
      [
        new Choice("It's ok little one!", [
          () => {
            this.setState(addJoy(this.state, -5));
            this.continue();
          }])
      ]);
    this.randomEncounters.push(this.encounters.singFail);

    this.encounters.singNo = new Encounter(this.state.companion.name + " looks at you with tear-filled eyes.",
      [
        new Choice("You are terrible.", [
          () => {
            this.setState(addJoy(this.state, -2));
            this.continue();
          }])
      ]);
    this.randomEncounters.push(this.encounters.singFail);

    this.encounters.singStart = new Encounter(this.state.companion.name + " hears another Chirling singing and wants to sing along!",
      [
        new Choice("Go for it!", [
          () => {
            this.setState(addJoy(this.state, 1));
            this.setState({encounter:chooseWeighted([this.encounters.singFail,
              this.encounters.singFun,
              this.encounters.singTip])});
          }]),
        new Choice("Not right now.", [
          () => {
            this.setState(addJoy(this.state, -5));
            this.setState({encounter:this.encounters.singNo});
          }])
      ]);
    this.randomEncounters.push(this.encounters.singStart);

  }

  continue = () => {
    let newState = {};
    newState.steps = this.state.steps - 1;
    newState.encounter = chooseWeighted(this.randomEncounters);
    this.setState(newState);
  }

  render() {
    let choiceButtons = [];
    for (var i = 0; i < this.state.encounter.choices.length; i++) {
      choiceButtons.push(<ChoiceButton
        key={this.state.encounter.choices[i].choiceText}
        desc={this.state.encounter.choices[i].choiceText}
        onClick={chooseWeighted(this.state.encounter.choices[i].outcomes)}
      />);
    }
    if (this.state.steps <= 0 && this.state.encounter != this.encounters.end) {
      this.setState({encounter:this.encounters.end});
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
  for (var i = 0; i < props.stats.length; i++) {
    dStats.push(<div className='stat' key={props.stats[i][0]}>{props.stats[i][0] + ": " + props.stats[i][1]}</div>);
  }
  return (
    <div className="statBox">
    {dStats}
    </div>
  )
}

function addCoins(state, n) {
  let newState = {};
  newState.coins = state.coins + n;
  return newState;
}

function addJoy(state, n) {
  let newState = {};
  newState.joy = state.joy + n;
  return newState;
}

function step(state) {
  let newState = {};
  newState.steps = state.steps - 1;
  return newState;
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

function check(dice, check) {
  return randInt(dice) >= check;
}

// Return a random integer from 1 to max, inclusive
function randInt(max) {
  return Math.floor((Math.random() * max) + 1);
}


function chooseWeighted(options) {
  let total = 0;
  for (var i = 0; i < options.length; i++) {
    total += options[i].weight || 1;
  }
  let target = Math.floor((Math.random() * total) + 1);
  let index = 0;
  target -= options[0].weight || 1;
  while (target > 0) {
    index++;
    target -= options[index].weight || 1;
  }
  return options[index].value || options[index];
}

export default App;
