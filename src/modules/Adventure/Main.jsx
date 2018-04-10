import React, { Component } from 'react';
import { chooseWeighted } from 'utils';
import { connect } from 'react-redux';
import { encounters, randomEncounters } from './encounters/Main';
import Areas from './Areas';
import './Adventure.css';
import SayluaView from '../SayluaView';
import { setEncounter, setArea, setSteps } from '../../store';
import * as Mousetrap from 'mousetrap';
import marked from 'marked';

const mapStateToProps = ({
  coins, activeCompanion, companions, encounterSeed, encounterId, area, steps,
}) =>
  ({
    coins, activeCompanion, companions, encounterSeed, encounterId, area, steps,
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
    const area = this.props.area || Areas.Gardenia;
    if (!this.props.area) {
      this.props.setArea(area);
    }
    if (this.props.steps < 1 && this.props.area.title === Areas.Gardenia.title) {
      this.props.setArea(Areas.Wanderlin);
      this.props.setSteps(100);
    } else if (this.props.steps < 1 && this.props.area.title === Areas.Wanderlin.title) {
      this.props.setArea(Areas.Corvinwood);
      this.props.setSteps(100);
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
    if (typeof encounter.img === 'string') {
      encounterImgs.push(<div><img
        src={encounter.img}
        alt="Encounter"
      /></div>);
    } else if (Array.isArray(encounter.img)) {
      for (let i = 0; i < encounter.img.length; i++) {
        encounterImgs.push(<div>
          <img
            src={encounter.img[i]}
            alt="Encounter"
          />
        </div>);
      }
    }
    const mainText = encounter.mainText;
    return (
      <SayluaView>
        <div className="adventure">
          <h2>{area.title} ({this.props.steps})</h2>
          <div
            className="imageArea"
            style={{ backgroundImage: `url('/img/backgrounds/${area.background}.jpg')` }}
          >
            {encounterImgs}
          </div>
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
