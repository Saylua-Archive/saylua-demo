import React from 'react';

export default function AdventureScene(props) {
  const sceneItems = [];
  for (let i = 0; i < props.items.length; i++) {
    sceneItems.push(<AdventureSceneItem
      src={props.items[i]}
    />);
  }
  return (
    <div
      className="adventure-scene"
      style={{ backgroundImage: props.background }}
    >
      {sceneItems}
    </div>
  );
}

function AdventureSceneItem(props) {
  const SCALE = 25;
  const HORIZON = 45;
  const x = Math.random() * 100;
  const y = Math.random() * HORIZON;
  const z = Math.random() * 0;
  const SCALEs = `${SCALE * (100 + (-0.0462 * y) + (0.0000102 * y * y))}%`;
  const xs = `${x}%`;
  const ys = `${y}%`;
  return (
    <img
      alt=""
      className="adventure-scene-item"
      src={props.src}
      style={{
        width: SCALEs,
        left: xs,
        bottom: ys,
      }}
    />
  );
}
