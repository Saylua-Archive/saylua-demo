import React, { Component } from 'react';

import './Checkbox.css';


export default class Checkbox extends Component {
  render() {
    return (
      <input
        className="saylua-checkbox"
        type="checkbox"
        checked={this.props.checked}
        value={this.props.value}
        onClick={this.props.onClick}
      />
    );
  }
}
