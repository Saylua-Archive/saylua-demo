import React, { Component } from 'react';

import './RadioInput.css';


export default class RadioInput extends Component {
  render() {
    return (
      <input
        id={this.props.id}
        className="saylua-radio"
        type="radio"
        checked={this.props.checked}
        name={this.props.name}
        value={this.props.value}
        onClick={this.props.onClick}
      />
    );
  }
}
