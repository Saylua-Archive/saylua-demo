import React from 'react';
import AdventureScene from './AdventureScene';

export default function EventView(props) {
  return (<div className="adventure">
    <h2>{props.area.title}</h2>
    <div className="adventure-boxes">
      <AdventureScene
        background={`url('/img/backgrounds/${props.area.background}.jpg')`}
        items={props.encounterImgs}
        activeCompanion={props.activeCompanion}
      />
      <div className="adventure-side">
        <p className="adventure-text" id="scene-desc" dangerouslySetInnerHTML={props.rawMarkup(props.mainText)} />
        {props.choiceButtons}
      </div>
    </div>
  </div>);
}
