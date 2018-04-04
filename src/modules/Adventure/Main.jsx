import React, { Component } from 'react';
import { chooseWeighted } from 'utils';
import { connect } from 'react-redux';
import { encounters, randomEncounters } from './encounters/Main';
import './Adventure.css';
import SayluaView from '../SayluaView';
import { setEncounter } from '../../store';
import * as Mousetrap from 'mousetrap';
import marked from 'marked';

const mapStateToProps = ({
  coins, activeCompanion, companions, encounterSeed, encounterId,
}) =>
  ({
    coins, activeCompanion, companions, encounterSeed, encounterId,
  });

const mapDispatchToProps = (dispatch) => {
  return {
    setEncounter: (encounter, seed) => {
      encounter.seed = seed || Math.floor(Math.random() * 10000000000);
      dispatch(setEncounter(encounter));
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
    const encounter = encounters[this.props.encounterId];
    const seed = this.props.encounterSeed;
    encounter.seed = seed;
    encounter.state = this.props;
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
        }
      };
      choiceButtons.push(<ChoiceButton
        key={`${index}. ${choices[i].text}`}
        desc={`${index}. ${choices[i].text}`}
        onClick={interact}
        index={index}
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
          <p className="adventureText" id="scene-desc" dangerouslySetInnerHTML={this.rawMarkup(mainText)} />
          {choiceButtons}
        </div>
      </SayluaView>
    );
  }
}

class ChoiceButton extends Component {
  componentDidMount() {
    Mousetrap.bind(this.props.index, this.props.onClick);
  }
  componentWillUnmount() {
    Mousetrap.unbind(this.props.index);
  }
  render() {
    return (
      <div
        className="choice"
        role="button"
        tabIndex={0}
        onClick={this.props.onClick}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            this.props.onClick();
          }
        }}
      >
        {this.props.desc}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Adventure);
