import React, { Component } from 'react';

import './RadioInput.css';


export default class RadioInput extends Component {
  render() {
    return (
      <input
        className="saylua-radio"
        type="radio"
        checked={this.props.checked}
        value={this.props.value}
        onClick={this.props.onClick}
      />
    );
  }
}
