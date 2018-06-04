import React, { Component } from 'react';

import './SlotMachine.css';

const WHEEL_HEIGHT = 300;

export default class SlotWheel extends Component {
  render() {
    const topOffset = -WHEEL_HEIGHT * this.props.index;
    return (
      <div className="wheel">
        <div className="wheel-inner-wrapper" style={{ transform: `translateY(${topOffset}px)` }}>
          {
            this.props.items.map(item => (
              <div className="slot" key={item}>
                { item }
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
