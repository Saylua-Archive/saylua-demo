import React from 'react';

export default function AdventureScene(props) {
  const sceneTuples = [];
  const sceneItems = [];
  for (let i = 0; i < props.items.length; i++) {
    sceneTuples.push([props.items[i], Math.random() * 100]);
  }
  sceneTuples.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < sceneTuples.length; i++) {
    sceneItems.push(<AdventureSceneItem
      src={sceneTuples[i][0]}
      y={sceneTuples[i][1]}
      key={sceneTuples[i][0]}
    />);
  }

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
  const SCALEs = `${(SCALE / 100) * (100 + (-0.882 * y) + (0.00372 * y * y))}%`;
  const xs = `${x}%`;
  const ys = `${y * (HORIZON / 100)}%`;
  return (
    <img
      alt=""
      className="adventure-scene-item"
      src={props.src}
      style={{
        width: SCALEs,
        left: xs,
        bottom: ys,
        filter: "drop-shadow(5px 5px 5px #222)",
      }}
    />
  );
}
