import React, { Component } from 'react';

import SayluaView from 'modules/SayluaView';

import BlocksInterface from './BlocksInterface';
import GameState from './GameState';

export default class Bloxi extends Component {
  constructor(props) {
    super(props);
    this.gameState = new GameState();
  }

  render() {
    return (
      <SayluaView>
        <BlocksInterface model={this.gameState} />
      </SayluaView>
    );
  }
}
