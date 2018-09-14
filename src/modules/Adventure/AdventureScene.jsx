import React from 'react';
import Sprite from 'models/Sprite';
import SpritePortrait from 'components/SpritePortrait';

export default function AdventureScene(props) {
  const sceneTuples = props.items.map(item => [item, Math.random() * 100]);
  sceneTuples.sort((a, b) => b[1] - a[1]);
  const sceneItems = sceneTuples.map(tuple => (<AdventureSceneItem
    width={tuple[0].size.width}
    src={tuple[0].src}
    y={tuple[1]}
    key={tuple[0].src}
  />));
  const topRight = props.opponent ? <BattleStatBox sprite={props.opponent} onRightSide /> :
  <div className="objective">Reach the dawnlands!</div>;

  return (
    <div
      className="adventure-scene"
      style={{
        backgroundImage: props.background,
      }}
    >
      <BattleStatBox
        sprite={props.activeCompanion}
      />
      {topRight}
      {sceneItems}
    </div>
  );
}

function AdventureSceneItem(props) {
  const SCALE = props.width;
  const HORIZON = 40;
  const x = (Math.random() * 100) - (SCALE / 2);
  const y = props.y;
  const z = Math.random() * 0;
  const scaleFactor = (SCALE / 100) * (100 + (-0.882 * y) + (0.00372 * y * y));
  const scaleStyle = `${scaleFactor}%`;
  const xStyle = `${x}%`;
  const yStyle = `${y * (HORIZON / 100)}%`;
  return (
    <img
      alt=""
      className="adventure-scene-item"
      src={props.src}
      style={{
        width: scaleStyle,
        left: xStyle,
        bottom: yStyle,
      }}
    />
  );
}

function BattleStatBox(props) {
  let result = props.sprite ?
    (<div className="battle-stat-box">
      <div className="battle-icon">
        <SpritePortrait
          imageUrl={Sprite.imageUrl(props.sprite)}
          portraitCoordinates={Sprite.species(props.sprite).portraitCoordinates}
          name={props.sprite.name}
        />
      </div>
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
    result = (<div className="battle-stat-box battle-stat-box-right">
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
      <div className="battle-icon battle-icon-right">
        <SpritePortrait
          imageUrl={Sprite.imageUrl(props.sprite)}
          portraitCoordinates={Sprite.species(props.sprite).portraitCoordinates}
          name={props.sprite.name}
        />
      </div>
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
