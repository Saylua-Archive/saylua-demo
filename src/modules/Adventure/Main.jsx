import React, { Component } from 'react';
import { chooseWeighted } from 'utils';
import { connect } from 'react-redux';
import { encounters, randomEncounters } from './encounters/Main';
import Areas from './Areas';
import './Adventure.css';
import SayluaView from 'components/SayluaView';
import { setEncounter, setArea, setSteps, updateCondition } from 'SayluaStore';
import * as Mousetrap from 'mousetrap';
import marked from 'marked';
import Sprite from 'models/Sprite';

const mapStateToProps = ({
  sayluaApp: {
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
      this.props.activeCompanion.health < 0 ||
      this.props.activeCompanion.stamina < 0 ||
      this.props.activeCompanion.focus < 0
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
    for (let i = 0; i < imgKeys.length; i++) {
      encounterImgs.push(<div>
        <img
          src={imgKeys[i].url}
          alt="Encounter"
          className={imgKeys[i].tiny ? "tiny-encounter-image" : ""}
          key={imgKeys[i].url}
        />
      </div>);
    }
    const mainText = encounter.mainText;
    return (
      <SayluaView>
        <EventView
          area={area}
          encounterImgs={encounterImgs}
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

function EventView(props) {
  const topRight = props.opponent ? <BattleStatBox sprite={props.opponent} right /> :
  <div className="objective">Reach the dawnlands!</div>;
  return (<div className="adventure">
    <h2>{props.area.title}</h2>
    <div
      style={{ backgroundImage: `url('/img/backgrounds/${props.area.background}.jpg')` }}
      className="adventureWrapper"
    >
      <div className="hud-area">
        <BattleStatBox sprite={props.activeCompanion} />
        {topRight}
      </div>
      <div className="imageArea">{props.encounterImgs}</div>
    </div>
    <p className="adventureText" id="scene-desc" dangerouslySetInnerHTML={props.rawMarkup(props.mainText)} />
    {props.choiceButtons}
  </div>);
}

function BattleStatBox(props) {
  let result = props.sprite ?
    (<div className="battleStatBox">
      <img className="battle-icon" src={Sprite.imageUrl(props.sprite)} alt={props.sprite.name} />
      <div className="bar-box">
        <div className="health-bar-back">
          <div className="health-bar-shaper">
            <StatBar
              value={props.sprite.health}
              max={Sprite.maxHealth(props.sprite)}
              className="health-bar"
            />
          </div>
        </div>
        <div className="stamina-bar-back">
          <StatBar
            value={props.sprite.stamina}
            max={Sprite.maxStamina(props.sprite)}
            className="stamina-bar"
          />
        </div>
      </div>
    </div>
    ) : null;
  if (props.right) {
    result = (<div className="battleStatBox">
      <div className="bar-box bar-box-right">
        <div className="health-bar-back health-bar-back-right">
          <div className="health-bar-shaper health-bar-shaper-right">
            <StatBar
              value={props.sprite.health}
              max={Sprite.maxHealth(props.sprite)}
              className="health-bar health-bar-right"
            />
          </div>
        </div>
        <div className="stamina-bar-back stamina-bar-back-right">
          <StatBar
            value={props.sprite.stamina}
            max={Sprite.maxStamina(props.sprite)}
            className="stamina-bar stamina-bar-right"
          />
        </div>
      </div>
      <img className="battle-icon battle-icon-right" src={Sprite.imageUrl(props.sprite)} alt={props.sprite.name} />
    </div>
    );
  }
  return result;
}


function StatBar(args) {
  const width = `${Math.max((args.value / args.max) * 100, 0)}%`;
  return (
    <div
      className={args.className}
      style={{
        width,
      }}
    />
  );
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
        key={this.props.desc}
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
