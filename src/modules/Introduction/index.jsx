import React, { Component } from 'react';

import './Introduction.css';

const INTRODUCTION_SCENE_CONTENT = [
  {
    text: [
      'Somehow you found yourself here, at the edge of a grand bamboo forest.',
      'You really shouldn\'t wander in the woods without a sprite.',
    ],
    nextText: 'But maybe it\'s time for a new adventure?',
    blurLevel: '15px',
  },
  {
    text: [
      'Time stands still beneath an eternal sunset.',
      'Tall bamboo scrapes the sky.',
      'The wind whistles through the leaves.',
    ],
    nextText: 'Go deeper.',
    blurLevel: '8px',
  },
  {
    text: [
      'You wander for a bit longer.',
      'Suddenly, you hear the low growl of a wild Loxi.',
    ],
    nextText: 'Run away.',
    blurLevel: '3px',
  },
  {
    text: [
      <img src="/img/sprites/loxi/albino.png" alt="A wild Loxi" />,
      'The Loxi leaps towards you, claws extended.',
    ],
    nextText: 'Oh no.',
    blurLevel: '0px',
  },
];

export default class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: 0,
    };
  }

  next() {
    this.setState({ scene: this.state.scene + 1 });
  }

  render() {
    const content = INTRODUCTION_SCENE_CONTENT[this.state.scene];
    return (
      <div>
        <div className="introduction-background" style={{ filter: `blur(${content.blurLevel})` }} />
        <div className="introduction-container">
          { content.text.map(text => <p key={text}>{text}</p>) }
          <button onClick={this.next.bind(this)}>
            &gt; { content.nextText }
          </button>
        </div>
      </div>
    );
  }
}
