import React, { Component } from 'react';

import './Input.css';

export default class Input extends Component {
  render() {
    return (
      <input
        className="saylua-input"
        style={this.props.style}
        data-error={this.props.error}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onClick={this.props.onClick}
        onChange={this.props.onChange}
      />
    );
  }
}
