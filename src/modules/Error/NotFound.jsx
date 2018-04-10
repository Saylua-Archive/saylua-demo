import React, { Component } from 'react';

import SayluaView from 'components/SayluaView';

export default class NotFound extends Component {
  render() {
    return (
      <SayluaView title="404 Page Not Found">
        <h1>404: Page Not Found</h1>
        <p>
          {`You wander around, but you feel that you are lost. This place is far
          away from home. How did you get here? You're not completely sure, but
          you decide that you might as well stay for a bit. In the distance,
          there's a slot machine.`}
        </p>
      </SayluaView>
    );
  }
}
