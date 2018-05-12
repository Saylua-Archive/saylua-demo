import React, { Component } from 'react';

import SayluaView from 'components/SayluaView';
import SlotMachine from './SlotMachine';


export default class NotFound extends Component {
  render() {
    return (
      <SayluaView title="404 Page Not Found">
        <h1>404: Page Not Found</h1>
        <SlotMachine />
      </SayluaView>
    );
  }
}
