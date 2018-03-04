import React, { Component } from 'react';

import './StaffActions.css';

// The main Saylua layout component.
export default class StaffActions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let level = this.props.level;
    let content = "Hello world";
    return (
        <div className={ "staff-actions " + level }>
          <h3>{ level } actions</h3>
          <div>
            { content }
          </div>
        </div>
    );
  }
}
