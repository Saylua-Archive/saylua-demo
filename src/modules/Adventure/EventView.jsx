import React from 'react';
import Sprite from 'models/Sprite';
import AdventureScene from './AdventureScene';

export default function EventView(props) {
  const topRight = props.opponent ? <BattleStatBox sprite={props.opponent} onRightSide /> :
  <div className="objective">Reach the dawnlands!</div>;
  return (<div className="adventure">
    <h2>{props.area.title}</h2>
    <div className="adventure-boxes">
      <AdventureScene
        background={`url('/img/backgrounds/${props.area.background}.jpg')`}
        items={props.encounterImgs}
      />
      <div className="adventure-side">
        <p className="adventure-text" id="scene-desc" dangerouslySetInnerHTML={props.rawMarkup(props.mainText)} />
        {props.choiceButtons}
      </div>
    </div>
  </div>);
}

function BattleStatBox(props) {
  let result = props.sprite ?
    (<div className="battle-stat-box">
      <img className="battle-icon" src={Sprite.imageUrl(props.sprite)} alt={props.sprite.name} />
      <div className="bar-box">
        <div className="health-bar-back">
          <StatBar
            value={props.sprite.health}
            max={Sprite.maxHealth(props.sprite)}
            className="health-bar"
          />
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
  if (props.onRightSide) {
    result = (<div className="battle-stat-box">
      <div className="bar-box bar-box-right">
        <div className="health-bar-back health-bar-back-right">
          <StatBar
            value={props.sprite.health}
            max={Sprite.maxHealth(props.sprite)}
            className="health-bar health-bar-right"
          />
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
