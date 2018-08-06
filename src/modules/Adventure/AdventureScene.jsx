import React from 'react';

export default function AdventureScene(props) {
  const sceneTuples = props.items.map(item => [item, Math.random() * 100]);
  sceneTuples.sort((a, b) => b[1] - a[1]);
  const sceneItems = sceneTuples.map(tuple => (<AdventureSceneItem
    src={tuple[0]}
    y={tuple[1]}
    key={tuple[0]}
  />));

  return (
    <div
      className="adventure-scene"
      style={{
        backgroundImage: props.background,
      }}
    >
      {sceneItems}
    </div>
  );
}

function AdventureSceneItem(props) {
  const SCALE = 33;
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
